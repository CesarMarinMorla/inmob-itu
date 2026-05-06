package com.inmob2.backend.model.dto.roles;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class AdministradorDTO extends RolInternoDTO {

    @NotBlank(message = "El área de supervisión es obligatoria")
    @Size(max = 50, message = "El área no puede exceder los 50 caracteres")
    private String areaSupervision;
}
