package com.inmob2.backend.model.entity.roles;

import com.inmob2.backend.model.entity.enums.SituacionLaboral;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("GARANTE")
@Getter
@Setter
@NoArgsConstructor
public class Garante extends RolExterno {

    @Column(name = "ingresos_mensuales_comprobables")
    private Double ingresosMensualesComprobables;

    @Column(name = "posee_inmuebles")
    private Boolean poseeInmuebles;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacion_laboral", length = 30)
    private SituacionLaboral situacionLaboral;

    @Column(name = "observaciones_garante", length = 1000)
    private String observacionesGarante;
}
