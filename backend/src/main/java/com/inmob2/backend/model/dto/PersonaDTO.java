package com.inmob2.backend.model.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
public abstract class PersonaDTO {
    private Long id;
    
    @Valid
    private List<DireccionPersonaDTO> direcciones = new ArrayList<>();
    
    @NotEmpty(message = "Debes ingresar al menos un teléfono de contacto")
    @Valid
    private List<TelefonoPersonaDTO> telefonos = new ArrayList<>();
    
    @NotEmpty(message = "Debes ingresar al menos un correo electrónico")
    @Valid
    private List<MailPersonaDTO> mails = new ArrayList<>();
}

