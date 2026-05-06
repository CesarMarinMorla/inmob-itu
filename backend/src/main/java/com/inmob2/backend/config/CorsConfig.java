package com.inmob2.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Esto aplica la configuración a todas tus rutas, por ejemplo, /api/v1/personas-fisicas
                        .allowedOrigins("http://localhost:5173") // El URL exacto de tu frontend en React con Vite
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Los métodos HTTP permitidos
                        .allowedHeaders("*") // Permite cualquier cabecera en la petición
                        .allowCredentials(true); // Solo es necesario si vas a trabajar con cookies o sesiones compartidas
            }
        };
    }
}
