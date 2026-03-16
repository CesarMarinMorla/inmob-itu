package com.inmob2.backend.model.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class PersonaJuridicaDTO {
    private Long id;
    private String razonSocial;
    private String cuit;
    private LocalDate fechaConstitucion;
    private String nombreNegocio;
}
