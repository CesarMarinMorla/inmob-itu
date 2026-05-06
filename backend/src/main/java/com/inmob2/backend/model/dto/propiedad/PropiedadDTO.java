package com.inmob2.backend.model.dto.propiedad;

import com.inmob2.backend.model.entity.propiedad.enums.EstadoPropiedad;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public abstract class PropiedadDTO {
    private Long id;

    @NotBlank(message = "El código de referencia es obligatorio")
    @Size(max = 50, message = "El código de ref. no puede superar los 50 caracteres")
    private String codigoRef;

    @Size(max = 100, message = "El código catastral no puede superar los 100 caracteres")
    private String codigoCatastral;

    @NotNull(message = "El estado de la propiedad es obligatorio")
    private EstadoPropiedad estado;

    private Double superficieTotal;

    private Double superficieCubierta;

    @Valid
    private DireccionPropiedadDTO direccion;

    // Recibiremos solo los IDs de los propietarios para vincularlos a la propiedad
    // Descomentar la siguiente línea si el negocio exige que toda propiedad nazca con al menos 1 dueño:
    // @jakarta.validation.constraints.NotEmpty(message = "La propiedad debe tener al menos un dueño asignado")
    private List<Long> dueniosIds = new ArrayList<>();
}

