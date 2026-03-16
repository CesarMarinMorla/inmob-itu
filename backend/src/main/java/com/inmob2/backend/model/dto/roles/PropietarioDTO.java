package com.inmob2.backend.model.dto.roles;

import com.inmob2.backend.model.entity.enums.CondicionIva;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class PropietarioDTO extends RolExternoDTO {

    @NotBlank(message = "El CUIT/CUIL es obligatorio para un propietario")
    @Size(min = 11, max = 20, message = "El CUIT/CUIL debe tener entre 11 y 20 caracteres")
    private String cuitCuil;

    @NotNull(message = "La condición frente al IVA es obligatoria")
    private CondicionIva condicionIva;

    @Size(max = 50, message = "Los Ingresos Brutos no pueden exceder 50 caracteres")
    private String ingresosBrutosNro;

    @NotNull(message = "Debe especificar si es persona jurídica o no")
    private Boolean esPersonaJuridica;

    @Size(max = 1000, message = "Las observaciones no pueden exceder 1000 caracteres")
    private String observacionesPropietario;
}
