package com.inmob2.backend.service.indice;

import com.fasterxml.jackson.databind.JsonNode;
import com.inmob2.backend.model.dto.ArglyIndiceResponse;
import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

/**
 * Adaptador (Anti-Corruption Layer) sobre la API de Argly.
 * <p>
 * Argly devuelve un wrapper {"data": {...}} y el shape de IPC e ICL es
 * distinto:
 * - IPC: {"indice_ipc": 3.4, "mes": 3, "anio": 2026, "fecha_publicacion":
 * "14/04/2026", ...}
 * - ICL: {"fecha": "07/05/2026", "valor": 32.4}
 * <p>
 * Esta clase normaliza ambos formatos a un único {@link ArglyIndiceResponse}.
 */
@Component
public class ArglyClient {

    private static final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    private final RestClient restClient;

    public ArglyClient(@Qualifier("arglyRestClient") RestClient restClient) {
        this.restClient = restClient;
    }

    /**
     * Obtiene el último valor publicado por Argly para el índice solicitado.
     *
     * @param tipo IPC o ICL
     * @return el último punto de la serie ya normalizado, o vacío si Argly devolvió
     *         un payload inesperado.
     * @throws org.springframework.web.client.RestClientException si la llamada HTTP
     *                                                            falla.
     */
    public Optional<ArglyIndiceResponse> obtenerUltimo(IndiceAjuste tipo) {
        String path = "/" + tipo.name().toLowerCase();

        JsonNode body = restClient.get()
                .uri(path)
                .retrieve()
                .body(JsonNode.class);

        if (body == null || !body.has("data")) {
            return Optional.empty();
        }

        JsonNode data = body.get("data");

        return switch (tipo) {
            case IPC -> parseIpc(data);
            case ICL -> parseIcl(data);
        };
    }

    private Optional<ArglyIndiceResponse> parseIpc(JsonNode data) {
        if (!data.hasNonNull("indice_ipc") || !data.hasNonNull("fecha_publicacion")) {
            return Optional.empty();
        }
        Double valor = data.get("indice_ipc").asDouble();
        LocalDate fecha = LocalDate.parse(data.get("fecha_publicacion").asText(), DATE_FORMAT);
        return Optional.of(new ArglyIndiceResponse(fecha, valor));
    }

    private Optional<ArglyIndiceResponse> parseIcl(JsonNode data) {
        if (!data.hasNonNull("valor") || !data.hasNonNull("fecha")) {
            return Optional.empty();
        }
        Double valor = data.get("valor").asDouble();
        LocalDate fecha = LocalDate.parse(data.get("fecha").asText(), DATE_FORMAT);
        return Optional.of(new ArglyIndiceResponse(fecha, valor));
    }
}