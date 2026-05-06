package com.inmob2.backend.model.dto.roles;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class EmpleadoDTO extends RolInternoDTO {

    @NotBlank(message = "El puesto es obligatorio")
    @Size(max = 50, message = "El puesto no puede exceder los 50 caracteres")
    private String puesto;
}
