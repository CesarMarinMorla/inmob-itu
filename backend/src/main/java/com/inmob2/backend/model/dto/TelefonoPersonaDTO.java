package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.TipoTelefono;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class TelefonoPersonaDTO {
    private Long id;
    
    @NotBlank(message = "El número de teléfono es obligatorio")
    @Size(max = 50, message = "El número no puede exceder los 50 caracteres")
    private String numero;
    
    @NotNull(message = "El tipo de teléfono es obligatorio")
    private TipoTelefono tipo;
}

