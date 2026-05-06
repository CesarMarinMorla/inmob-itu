package com.inmob2.backend.model.dto.roles;

import lombok.Data;
import java.time.LocalDate;

@Data
public abstract class RolDTO {
    private Long id;
    private LocalDate fechaAlta;
    // No incluimos Persona completa para evitar ciclos, solo el ID si lo necesitamos enviar al Front
    private Long personaId;
}
