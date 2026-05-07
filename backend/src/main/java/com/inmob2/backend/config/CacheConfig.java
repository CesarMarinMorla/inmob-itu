package com.inmob2.backend.config;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Habilita el soporte de cache de Spring para el módulo de índices.
 * <p>
 * Se utiliza un cache in-memory (ConcurrentMapCacheManager) ya que los índices
 * IPC e ICL solo cambian una vez por día: no justifican un Redis ni un Caffeine.
 */
@Configuration
@EnableCaching
public class CacheConfig {

    public static final String INDICES_CACHE = "indices";

    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager(INDICES_CACHE);
    }
}
