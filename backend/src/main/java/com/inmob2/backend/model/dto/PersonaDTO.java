package com.inmob2.backend.model.dto;

import jakarta.validation.Valid;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
public abstract class PersonaDTO {
    private Long id;
    
    @Valid
    private List<DireccionPersonaDTO> direcciones = new ArrayList<>();
    
    @Valid
    private List<TelefonoPersonaDTO> telefonos = new ArrayList<>();
    
    @Valid
    private List<MailPersonaDTO> mails = new ArrayList<>();
}

