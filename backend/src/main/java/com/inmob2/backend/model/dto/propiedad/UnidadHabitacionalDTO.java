package com.inmob2.backend.model.dto.propiedad;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public abstract class UnidadHabitacionalDTO extends PropiedadDTO {
    private Integer ambientesNum;
    private Integer dormitoriosNum;
    private Integer baniosNum;
    private Boolean mascotas;
    private Boolean aptoProfesional;
    private Integer anioConstruccion;
}
