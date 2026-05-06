package com.inmob2.backend.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = true)
public class PersonaJuridicaDTO extends PersonaDTO {
    
    @NotBlank(message = "La razón social es obligatoria")
    @Size(max = 100, message = "La razón social no puede exceder los 100 caracteres")
    private String razonSocial;
    
    @NotBlank(message = "El CUIT es obligatorio")
    @Size(min = 11, max = 20, message = "El CUIT debe tener entre 11 y 20 caracteres")
    private String cuit;
    
    @NotNull(message = "La fecha de constitución no puede ser nula")
    private LocalDate fechaConstitucion;
    
    @Size(max = 100, message = "El nombre de negocio no puede exceder los 100 caracteres")
    private String nombreNegocio;
}


