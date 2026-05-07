package com.inmob2.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.ClientHttpRequestFactories;
import org.springframework.boot.web.client.ClientHttpRequestFactorySettings;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

import java.time.Duration;

/**
 * Configura el RestClient utilizado para consumir la API externa de Argly.
 * <p>
 * Se define un bean dedicado ("arglyRestClient") con su propia base URL y timeouts
 * para que la lógica de negocio no tenga que conocer detalles de transporte.
 */
@Configuration
public class RestClientConfig {

    @Value("${argly.api.base-url}")
    private String arglyBaseUrl;

    @Value("${argly.api.connect-timeout-ms}")
    private long arglyConnectTimeoutMs;

    @Value("${argly.api.read-timeout-ms}")
    private long arglyReadTimeoutMs;

    @Bean(name = "arglyRestClient")
    public RestClient arglyRestClient() {
        ClientHttpRequestFactorySettings settings = ClientHttpRequestFactorySettings.defaults()
                .withConnectTimeout(Duration.ofMillis(arglyConnectTimeoutMs))
                .withReadTimeout(Duration.ofMillis(arglyReadTimeoutMs));

        return RestClient.builder()
                .baseUrl(arglyBaseUrl)
                .requestFactory(ClientHttpRequestFactories.get(settings))
                .build();
    }
}
