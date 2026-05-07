package com.inmob2.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestClient;

/**
 * Configura el RestClient utilizado para consumir la API externa de Argly.
 * <p>
 * Se define un bean dedicado ("arglyRestClient") con su propia base URL y
 * timeouts
 * para que la lógica de negocio no tenga que conocer detalles de transporte.
 */
@Configuration
public class RestClientConfig {

    @Value("${argly.api.base-url}")
    private String arglyBaseUrl;

    @Value("${argly.api.connect-timeout-ms}")
    private int arglyConnectTimeoutMs;

    @Value("${argly.api.read-timeout-ms}")
    private int arglyReadTimeoutMs;

    @Bean(name = "arglyRestClient")
    public RestClient arglyRestClient() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(arglyConnectTimeoutMs);
        factory.setReadTimeout(arglyReadTimeoutMs);

        return RestClient.builder()
                .baseUrl(arglyBaseUrl)
                .requestFactory(factory)
                .build();
    }
}