package com.inmob2.backend.model.dto;

public record UsuarioDTO(
    Long id,
    String sub,
    String nivelAcceso,
    Long personaId
) {
}
