package com.inmob2.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;

/**
 * Representa un único punto de la serie devuelta por la API de Argly.
 * Es un DTO de "borde" (Anti-Corruption Layer): sólo lo usa el ArglyClient
 * para deserializar la respuesta cruda del proveedor. No se expone al frontend.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record ArglyIndiceResponse(
        LocalDate fecha,
        Double valor
) {
}
