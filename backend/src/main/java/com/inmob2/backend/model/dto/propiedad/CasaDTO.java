package com.inmob2.backend.model.dto.propiedad;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CasaDTO extends UnidadHabitacionalDTO {
    private Integer plantasNum;
    private Boolean jardin;
    private Boolean cochera;
    private Boolean barrioCerrado;
}
