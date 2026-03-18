package com.inmob2.backend.model.dto.roles;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class InquilinoDTO extends RolExternoDTO {

    @NotBlank(message = "La ocupación principal es obligatoria")
    @Size(max = 100, message = "La ocupación no puede exceder los 100 caracteres")
    private String ocupacionPrincipal;

    @NotNull(message = "Los ingresos mensuales son obligatorios")
    private Double ingresosMensuales;

    private Integer antiguedadLaboral;

    private Boolean antecedentesMora;
}
