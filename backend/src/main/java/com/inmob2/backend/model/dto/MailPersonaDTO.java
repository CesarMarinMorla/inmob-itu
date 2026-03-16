package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.TipoMail;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class MailPersonaDTO {
    private Long id;
    
    @NotBlank(message = "El email no puede estar vacío")
    @Email(message = "El formato del email es inválido")
    private String email;
    
    @NotNull(message = "El tipo de mail es obligatorio")
    private TipoMail tipo;
    
    private Boolean esPrincipal;
}

