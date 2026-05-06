package com.inmob2.backend.model.dto.roles;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public abstract class RolExternoDTO extends RolDTO {
    private String observacionesPrivadas;
}
