package com.inmob2.backend.service.indice;

import com.inmob2.backend.config.CacheConfig;
import com.inmob2.backend.model.dto.ArglyIndiceResponse;
import com.inmob2.backend.model.dto.IndiceDTO;
import com.inmob2.backend.model.entity.IndiceSnapshot;
import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import com.inmob2.backend.repository.IndiceSnapshotRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * Servicio de dominio para los índices económicos (IPC / ICL).
 * <p>
 * Resolución por capas:
 * <ol>
 *   <li>Cache in-memory ({@code "indices"}) — {@link Cacheable} hace miss/hit por {@code tipo}.</li>
 *   <li>API externa ({@link ArglyClient}). Si responde, persiste el snapshot y devuelve LIVE.</li>
 *   <li>Fallback DB ({@link IndiceSnapshotRepository}). Si Argly falla, devuelve el último snapshot persistido.</li>
 * </ol>
 * El sistema arranca incluso si Argly está caído: la primera llamada cae al fallback
 * y, si no hay snapshot tampoco, devuelve un DTO con valor null sin romper la UI.
 */
@Service
@RequiredArgsConstructor
public class IndiceService {

    private static final Logger log = LoggerFactory.getLogger(IndiceService.class);

    private final ArglyClient arglyClient;
    private final IndiceSnapshotRepository indiceSnapshotRepository;

    /**
     * Devuelve el valor para un índice puntual. La anotación {@link Cacheable} hace que
     * la primera invocación cargue desde Argly (o fallback) y las siguientes salgan de cache
     * hasta el próximo refresh diario.
     */
    @Cacheable(value = CacheConfig.INDICES_CACHE, key = "#tipo")
    @Transactional
    public IndiceDTO obtener(IndiceAjuste tipo) {
        try {
            Optional<ArglyIndiceResponse> remoto = arglyClient.obtenerUltimo(tipo);
            if (remoto.isPresent()) {
                ArglyIndiceResponse r = remoto.get();
                IndiceSnapshot persistido = upsertSnapshot(tipo, r);
                log.info("Indice {} obtenido en vivo de Argly: valor={} fecha={}",
                        tipo, r.valor(), r.fecha());
                return new IndiceDTO(
                        tipo,
                        persistido.getValor(),
                        persistido.getFecha(),
                        persistido.getActualizadoEn(),
                        IndiceDTO.Origen.LIVE
                );
            }
            log.warn("Argly devolvió una serie vacía para {}, usando fallback", tipo);
        } catch (Exception ex) {
            log.error("Error consultando Argly para indice {}: {}", tipo, ex.getMessage());
        }
        return resolverFallback(tipo);
    }

    /**
     * Devuelve los dos índices al frontend en una sola llamada. Cada uno pasa por el flujo
     * cache → Argly → fallback de manera independiente: si IPC está disponible y ICL no,
     * IPC vendrá LIVE/CACHE e ICL vendrá FALLBACK.
     */
    @Transactional(readOnly = true)
    public List<IndiceDTO> obtenerTodos() {
        return Arrays.stream(IndiceAjuste.values())
                .map(this::obtener)
                .toList();
    }

    /**
     * Refresh programado diario: limpia el cache y precalienta ambos índices.
     * Si Argly está caído ese día, el cache no se llena y la próxima request resuelve
     * con el snapshot persistido más reciente.
     */
    @CacheEvict(value = CacheConfig.INDICES_CACHE, allEntries = true)
    @Scheduled(cron = "0 0 8 * * *")
    public void refreshDiario() {
        log.info("Ejecutando refresh diario de indices economicos");
        for (IndiceAjuste tipo : IndiceAjuste.values()) {
            obtener(tipo);
        }
    }

    // ---------- Helpers privados ----------

    private IndiceSnapshot upsertSnapshot(IndiceAjuste tipo, ArglyIndiceResponse r) {
        IndiceSnapshot snapshot = indiceSnapshotRepository.findById(tipo)
                .orElseGet(IndiceSnapshot::new);
        snapshot.setTipo(tipo);
        snapshot.setValor(r.valor());
        snapshot.setFecha(r.fecha());
        snapshot.setActualizadoEn(LocalDateTime.now());
        return indiceSnapshotRepository.save(snapshot);
    }

    private IndiceDTO resolverFallback(IndiceAjuste tipo) {
        return indiceSnapshotRepository.findById(tipo)
                .map(s -> new IndiceDTO(
                        s.getTipo(),
                        s.getValor(),
                        s.getFecha(),
                        s.getActualizadoEn(),
                        IndiceDTO.Origen.FALLBACK))
                .orElseGet(() -> {
                    log.warn("Sin snapshot persistido para {}: devolviendo DTO vacio", tipo);
                    return new IndiceDTO(tipo, null, null, LocalDateTime.now(),
                            IndiceDTO.Origen.FALLBACK);
                });
    }
}
