package com.inmob2.backend.model.dto;

import lombok.Data;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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

    // Listas anidadas para proveer el modelo completo al Frontend
    private List<DireccionPersonaDTO> direcciones = new ArrayList<>();
    private List<TelefonoPersonaDTO> telefonos = new ArrayList<>();
    private List<MailPersonaDTO> mails = new ArrayList<>();
}

