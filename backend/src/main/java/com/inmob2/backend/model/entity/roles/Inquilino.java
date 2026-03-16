package com.inmob2.backend.model.entity.roles;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("INQUILINO")
@Getter
@Setter
@NoArgsConstructor
public class Inquilino extends RolExterno {

    @Column(name = "ocupacion_principal", length = 100)
    private String ocupacionPrincipal;

    @Column(name = "ingresos_mensuales")
    private Double ingresosMensuales;

    @Column(name = "antiguedad_laboral_meses")
    private Integer antiguedadLaboral; // Representado en meses o años según regla de negocio

    @Column(name = "antecedentes_mora")
    private Boolean antecedentesMora;
}
