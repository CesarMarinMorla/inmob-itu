package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.TipoMail;
import lombok.Data;

@Data
public class MailPersonaDTO {
    private Long id;
    private String email;
    private TipoMail tipo;
    private Boolean esPrincipal;
}
