package com.inmob2.backend.model.entity.roles;

import com.inmob2.backend.model.entity.enums.CondicionIva;
import com.inmob2.backend.model.entity.propiedad.Propiedad;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "propietario")
@Getter
@Setter
@NoArgsConstructor
public class Propietario extends RolExterno {

    @Column(name = "cuit_cuil", length = 20)
    private String cuitCuil;

    @Enumerated(EnumType.STRING)
    @Column(name = "condicion_iva", length = 30)
    private CondicionIva condicionIva;

    @Column(name = "ingresos_brutos_nro", length = 50)
    private String ingresosBrutosNro;

    @Column(name = "es_persona_juridica")
    private Boolean esPersonaJuridica;

    @Column(name = "observaciones_propietario", length = 1000)
    private String observacionesPropietario;

    // Relación ManyToMany bidireccional mapeada por Propiedad
    @ManyToMany(mappedBy = "dueniosLista")
    private List<Propiedad> propiedades = new ArrayList<>();
}

