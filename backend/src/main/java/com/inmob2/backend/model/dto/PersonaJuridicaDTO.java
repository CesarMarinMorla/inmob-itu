package com.inmob2.backend.model.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = true)
public class PersonaJuridicaDTO extends PersonaDTO {
    private String razonSocial;
    private String cuit;
    private LocalDate fechaConstitucion;
    private String nombreNegocio;
}

