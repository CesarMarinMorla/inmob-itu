package com.inmob2.backend.model.dto;

import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
public abstract class PersonaDTO {
    private Long id;
    private List<DireccionPersonaDTO> direcciones = new ArrayList<>();
    private List<TelefonoPersonaDTO> telefonos = new ArrayList<>();
    private List<MailPersonaDTO> mails = new ArrayList<>();
}
