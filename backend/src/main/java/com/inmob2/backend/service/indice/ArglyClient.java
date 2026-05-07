package com.inmob2.backend.service.indice;

import com.inmob2.backend.model.dto.ArglyIndiceResponse;
import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Optional;

/**
 * Adaptador (Anti-Corruption Layer) sobre la API de Argly.
 * <p>
 * Su única responsabilidad es hablar HTTP con el proveedor y entregar el último
 * punto de la serie como un {@link ArglyIndiceResponse}. Cualquier excepción
 * (timeout, 4xx/5xx, parseo) burbujea para que IndiceService decida fallback.
 */
@Component
public class ArglyClient {

    private static final ParameterizedTypeReference<List<ArglyIndiceResponse>> LIST_TYPE =
            new ParameterizedTypeReference<>() {};

    private final RestClient restClient;

    public ArglyClient(@Qualifier("arglyRestClient") RestClient restClient) {
        this.restClient = restClient;
    }

    /**
     * Obtiene el último valor publicado por Argly para el índice solicitado.
     *
     * @param tipo IPC o ICL
     * @return el último punto de la serie, o vacío si Argly devolvió una lista vacía.
     * @throws org.springframework.web.client.RestClientException si la llamada HTTP falla.
     */
    public Optional<ArglyIndiceResponse> obtenerUltimo(IndiceAjuste tipo) {
        String path = "/" + tipo.name().toLowerCase();

        List<ArglyIndiceResponse> serie = restClient.get()
                .uri(path)
                .retrieve()
                .body(LIST_TYPE);

        if (serie == null || serie.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(serie.get(serie.size() - 1));
    }
}
