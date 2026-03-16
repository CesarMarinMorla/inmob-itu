package com.inmob2.backend.model.entity.roles;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("EXTERNO")
@Getter
@Setter
@NoArgsConstructor
public abstract class RolExterno extends Rol {

    @Column(name = "observaciones_privadas", length = 500)
    private String observacionesPrivadas;
}
