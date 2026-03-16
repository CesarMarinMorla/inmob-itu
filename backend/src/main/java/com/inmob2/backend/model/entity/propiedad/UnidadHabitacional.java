package com.inmob2.backend.model.entity.propiedad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "unidad_habitacional")
@Getter
@Setter
@NoArgsConstructor
public abstract class UnidadHabitacional extends Propiedad {

    @Column(name = "ambientes_num")
    private Integer ambientesNum;

    @Column(name = "dormitorios_num")
    private Integer dormitoriosNum;

    @Column(name = "banios_num")
    private Integer baniosNum;

    @Column(name = "mascotas")
    private Boolean mascotas;

    @Column(name = "apto_profesional")
    private Boolean aptoProfesional;

    @Column(name = "anio_construccion")
    private Integer anioConstruccion;
}
