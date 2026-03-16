package com.inmob2.backend.model.dto;

import com.inmob2.backend.model.entity.enums.TipoTelefono;
import lombok.Data;

@Data
public class TelefonoPersonaDTO {
    private Long id;
    private String numero;
    private TipoTelefono tipo;
}
