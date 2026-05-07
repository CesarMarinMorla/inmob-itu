package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.IndiceAjuste;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * DTO público que devuelve el endpoint /api/v1/indices al frontend.
 *
 * @param tipo                 ICL o IPC (reutiliza el enum existente IndiceAjuste).
 * @param valor                Último valor del índice. Puede ser null si Argly nunca respondió y no hay snapshot.
 * @param fecha                Fecha del valor del índice (informada por el proveedor).
 * @param ultimaActualizacion  Momento en el que el backend obtuvo o persistió el valor.
 * @param origen               Indica al frontend si el dato viene en vivo, de cache o de fallback.
 */
public record IndiceDTO(
        IndiceAjuste tipo,
        Double valor,
        LocalDate fecha,
        LocalDateTime ultimaActualizacion,
        Origen origen
) {
    public enum Origen {
        /** Recién obtenido del proveedor en esta llamada. */
        LIVE,
        /** Servido desde cache in-memory. */
        CACHE,
        /** Argly no respondió: se devuelve el último valor persistido. */
        FALLBACK
    }
}
