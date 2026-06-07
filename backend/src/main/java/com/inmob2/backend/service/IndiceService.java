package com.inmob2.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.inmob2.backend.model.dto.ArglyIndiceDTO;
import com.inmob2.backend.model.dto.IndicesConsolidadosDTO;
import com.inmob2.backend.model.entity.IndiceEconomico;
import com.inmob2.backend.repository.IndiceEconomicoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class IndiceService {

    private static final Logger logger = LoggerFactory.getLogger(IndiceService.class);
    private final RestClient restClient;
    private final IndiceEconomicoRepository repository;

    public IndiceService(IndiceEconomicoRepository repository) {
        this.repository = repository;
        this.restClient = RestClient.builder()
                .baseUrl("https://api.argly.com.ar/api")
                .build();
    }

    @Cacheable(value = "indices", key = "'consolidados'")
    public IndicesConsolidadosDTO getIndices() {
        return fetchAndProcessIndices();
    }

    @CachePut(value = "indices", key = "'consolidados'")
    @Scheduled(cron = "0 0 8 * * *") // Se ejecuta todos los días a las 8 AM
    public IndicesConsolidadosDTO refreshIndicesScheduled() {
        logger.info("Ejecutando tarea programada para actualizar índices IPC e ICL...");
        return fetchAndProcessIndices();
    }

    private IndicesConsolidadosDTO fetchAndProcessIndices() {
        ArglyIndiceDTO ipc = fetchUltimoIndice("/ipc", "IPC");
        ArglyIndiceDTO icl = fetchUltimoIndice("/icl", "ICL");

        boolean errorApi = (ipc == null || icl == null);

        // Si falló alguno y no pudo obtener de Argly, usamos la base de datos (fallback).
        if (ipc == null) {
            ipc = getFallback("IPC");
        } else {
            saveToDatabase("IPC", ipc);
        }

        if (icl == null) {
            icl = getFallback("ICL");
        } else {
            saveToDatabase("ICL", icl);
        }

        return IndicesConsolidadosDTO.builder()
                .ipc(ipc)
                .icl(icl)
                .fechaActualizacion(LocalDateTime.now())
                .errorApi(errorApi)
                .build();
    }

    private ArglyIndiceDTO fetchUltimoIndice(String uri, String tipo) {
        try {
            JsonNode response = restClient.get()
                    .uri(uri)
                    .retrieve()
                    .body(JsonNode.class);

            if (response != null && response.has("data")) {
                JsonNode data = response.get("data");
                if ("IPC".equals(tipo)) {
                    double valor = data.get("indice_ipc").asDouble();
                    String fecha = data.get("fecha_publicacion").asText();
                    return new ArglyIndiceDTO(fecha, valor);
                } else if ("ICL".equals(tipo)) {
                    double valor = data.get("valor").asDouble();
                    String fecha = data.get("fecha").asText();
                    return new ArglyIndiceDTO(fecha, valor);
                }
            }
        } catch (RestClientException e) {
            logger.error("Error al consumir la API de Argly para {}: {}", tipo, e.getMessage());
        } catch (Exception e) {
            logger.error("Error inesperado al parsear la API de Argly para {}: {}", tipo, e.getMessage());
        }
        return null; // Retorna null si hay error, delegando al fallback
    }

    private ArglyIndiceDTO getFallback(String tipo) {
        Optional<IndiceEconomico> entityOpt = repository.findByTipo(tipo);
        if (entityOpt.isPresent()) {
            IndiceEconomico entity = entityOpt.get();
            return new ArglyIndiceDTO(entity.getFechaActualizacion().toString(), entity.getValor());
        }
        // Si ni siquiera hay fallback en BD (primer inicio sin internet)
        return new ArglyIndiceDTO("No disponible", 0.0);
    }

    private void saveToDatabase(String tipo, ArglyIndiceDTO dto) {
        Optional<IndiceEconomico> entityOpt = repository.findByTipo(tipo);
        IndiceEconomico entity = entityOpt.orElse(IndiceEconomico.builder().tipo(tipo).build());

        entity.setValor(dto.getValor());
        entity.setFechaActualizacion(LocalDateTime.now());
        repository.save(entity);
    }
}
