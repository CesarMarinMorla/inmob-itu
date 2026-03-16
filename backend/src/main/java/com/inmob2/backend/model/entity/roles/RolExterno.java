package com.inmob2.backend.model.entity.roles;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "rol_externo")
@Getter
@Setter
@NoArgsConstructor
public abstract class RolExterno extends Rol {

    @Column(name = "observaciones_privadas", length = 500)
    private String observacionesPrivadas;
}
