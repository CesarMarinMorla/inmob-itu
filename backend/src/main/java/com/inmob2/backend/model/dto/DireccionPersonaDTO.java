package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.TipoDomicilio;
import lombok.Data;

@Data
public class DireccionPersonaDTO {
    private Long id;
    private String calle;
    private Integer altura;
    private String piso;
    private String departamento;
    private String barrio;
    private String localidad;
    private String provincia;
    private String codigoPostal;
    private TipoDomicilio tipoDomicilio;
}
