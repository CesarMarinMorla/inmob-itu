package com.inmob2.backend.model.entity.roles;

import com.inmob2.backend.model.entity.enums.CondicionIva;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// import java.util.List;

@Entity
@DiscriminatorValue("PROPIETARIO")
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

    // TODO: Descomentar e implementar cuando se defina la entidad Propiedad
    // @OneToMany(mappedBy = "propietario", cascade = CascadeType.ALL, orphanRemoval = true)
    // private List<Propiedad> propiedades;
}
