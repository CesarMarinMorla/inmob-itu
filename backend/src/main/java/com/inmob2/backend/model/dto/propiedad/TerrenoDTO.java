package com.inmob2.backend.model.dto.propiedad;

import com.inmob2.backend.model.entity.propiedad.enums.Perimetro;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class TerrenoDTO extends PropiedadDTO {
    private Boolean aplicaRendimiento;
    private Double superficieProduccion;
    private Perimetro perimetro;
}
