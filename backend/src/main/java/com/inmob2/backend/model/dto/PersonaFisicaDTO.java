package com.inmob2.backend.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = true)
public class PersonaFisicaDTO extends PersonaDTO {
    
    @NotBlank(message = "El primer nombre es obligatorio")
    @Size(max = 50, message = "El primer nombre no puede exceder 50 caracteres")
    private String primerNombre;
    
    @Size(max = 50, message = "El segundo nombre no puede exceder 50 caracteres")
    private String segundoNombre;
    
    @NotBlank(message = "El primer apellido es obligatorio")
    @Size(max = 50, message = "El primer apellido no puede exceder 50 caracteres")
    private String primerApellido;
    
    @Size(max = 50, message = "El segundo apellido no puede exceder 50 caracteres")
    private String segundoApellido;
    
    @NotBlank(message = "El tipo de documento es obligatorio")
    private String tipoDocumento;
    
    @NotBlank(message = "El número de documento es obligatorio")
    @Size(max = 20, message = "El número de documento no puede exceder 20 caracteres")
    private String numDocumento;
    
    @NotNull(message = "La fecha de nacimiento no puede ser nula")
    private LocalDate fechaNacimiento;
}



