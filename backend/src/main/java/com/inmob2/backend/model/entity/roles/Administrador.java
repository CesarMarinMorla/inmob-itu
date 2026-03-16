package com.inmob2.backend.model.entity.roles;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("ADMINISTRADOR")
@Getter
@Setter
@NoArgsConstructor
public class Administrador extends RolInterno {

    @Column(name = "area_supervision", length = 50)
    private String areaSupervision; // Ej: Finanzas, RRHH
}
