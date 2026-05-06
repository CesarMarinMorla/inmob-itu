package com.inmob2.backend.model.dto.propiedad;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class DireccionPropiedadDTO {
    private Long id;

    @NotBlank(message = "La calle o ruta es obligatoria")
    @Size(max = 150, message = "La calle o ruta no puede exceder 150 caracteres")
    private String calleRuta;

    @Size(max = 50, message = "La altura o KM no puede exceder 50 caracteres")
    private String alturaKm;

    @NotBlank(message = "La localidad es obligatoria")
    @Size(max = 100, message = "La localidad no puede exceder 100 caracteres")
    private String localidad;

    @NotBlank(message = "La provincia es obligatoria")
    @Size(max = 100, message = "La provincia no puede exceder 100 caracteres")
    private String provincia;

    @Size(max = 20, message = "El código postal no puede exceder 20 caracteres")
    private String codigoPostal;
}
