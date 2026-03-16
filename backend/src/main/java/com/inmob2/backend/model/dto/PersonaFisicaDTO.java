package com.inmob2.backend.model.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class PersonaFisicaDTO {
    private Long id;
    private String primerNombre;
    private String segundoNombre;
    private String primerApellido;
    private String segundoApellido;
    private String tipoDocumento;
    private String numDocumento;
    private LocalDate fechaNacimiento;
}
