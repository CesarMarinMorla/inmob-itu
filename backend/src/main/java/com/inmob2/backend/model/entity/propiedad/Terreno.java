package com.inmob2.backend.model.entity.propiedad;

import com.inmob2.backend.model.entity.propiedad.enums.Perimetro;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "terreno")
@Getter
@Setter
@NoArgsConstructor
public class Terreno extends Propiedad {

    @Column(name = "aplica_rendimiento")
    private Boolean aplicaRendimiento;

    @Column(name = "superficie_produccion")
    private Double superficieProduccion;

    @Enumerated(EnumType.STRING)
    @Column(name = "perimetro", length = 30)
    private Perimetro perimetro;
}
