package com.inmob2.backend.model.dto.roles;

import com.inmob2.backend.model.entity.enums.SituacionLaboral;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class GaranteDTO extends RolExternoDTO {

    @NotNull(message = "Debes especificar los ingresos comprobables")
    private Double ingresosMensualesComprobables;

    private Boolean poseeInmuebles;

    @NotNull(message = "La situación laboral es obligatoria")
    private SituacionLaboral situacionLaboral;

    @Size(max = 1000, message = "Las observaciones no pueden exceder los 1000 caracteres")
    private String observacionesGarante;
}
