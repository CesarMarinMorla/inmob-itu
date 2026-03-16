package com.inmob2.backend.model.entity.propiedad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "casa")
@Getter
@Setter
@NoArgsConstructor
public class Casa extends UnidadHabitacional {

    @Column(name = "plantas_num")
    private Integer plantasNum;

    @Column(name = "jardin")
    private Boolean jardin;

    @Column(name = "cochera")
    private Boolean cochera;

    @Column(name = "barrio_cerrado")
    private Boolean barrioCerrado;
}
