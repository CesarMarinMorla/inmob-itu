package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.TipoDomicilio;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class DireccionPersonaDTO {
    private Long id;
    
    @NotBlank(message = "La calle es obligatoria")
    @Size(max = 150, message = "La calle no puede exceder los 150 caracteres")
    private String calle;
    
    private Integer altura;
    
    @Size(max = 10, message = "El piso no puede exceder 10 caracteres")
    private String piso;
    
    @Size(max = 10, message = "El departamento no puede exceder 10 caracteres")
    private String departamento;
    
    @Size(max = 100, message = "El barrio no puede exceder 100 caracteres")
    private String barrio;
    
    @Size(max = 100, message = "La localidad no puede exceder 100 caracteres")
    private String localidad;
    
    @Size(max = 100, message = "La provincia no puede exceder 100 caracteres")
    private String provincia;
    
    @Size(max = 20, message = "El código postal no puede exceder 20 caracteres")
    private String codigoPostal;
    
    @NotNull(message = "El tipo de domicilio es obligatorio")
    private TipoDomicilio tipoDomicilio;
}

