package com.inmob2.backend.model.dto.propiedad;

import com.inmob2.backend.model.entity.propiedad.enums.Amenity;
import com.inmob2.backend.model.entity.propiedad.enums.Disposicion;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class DepartamentoDTO extends UnidadHabitacionalDTO {
    
    @Size(max = 10, message = "El piso no puede exceder 10 caracteres")
    private String piso;

    @Size(max = 10, message = "La letra/número no puede exceder 10 caracteres")
    private String letraNumero;

    private Double expensasMonto;
    private Disposicion disposicion;
    private List<Amenity> amenities = new ArrayList<>();
}
