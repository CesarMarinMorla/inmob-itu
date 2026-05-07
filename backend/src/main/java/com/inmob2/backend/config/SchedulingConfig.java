package com.inmob2.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Habilita las tareas programadas (@Scheduled) sin contaminar la clase principal
 * de la aplicación. El refresh diario de los índices (IndiceService) depende de esto.
 */
@Configuration
@EnableScheduling
public class SchedulingConfig {
}
