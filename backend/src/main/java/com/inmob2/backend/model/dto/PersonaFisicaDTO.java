package com.inmob2.backend.model.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = true)
public class PersonaFisicaDTO extends PersonaDTO {
    private String primerNombre;
    private String segundoNombre;
    private String primerApellido;
    private String segundoApellido;
    private String tipoDocumento;
    private String numDocumento;
    private LocalDate fechaNacimiento;
}


