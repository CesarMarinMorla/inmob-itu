package com.inmob2.backend.model.dto.roles;

import com.inmob2.backend.model.entity.enums.NivelAcceso;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = true)
public abstract class RolInternoDTO extends RolDTO {
    private String legajo;
    private String nombreUsuario;
    private String passwordHash;
    private LocalDate fechaIngreso;
    private NivelAcceso nivelAcceso;
}
