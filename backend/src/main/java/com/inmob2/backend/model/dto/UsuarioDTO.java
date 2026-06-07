package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.NivelAcceso;
import lombok.Data;

@Data
public class UsuarioDTO {
    private Long id;
    private String sub;
    private NivelAcceso nivelAcceso;
    private Long personaId;
}
