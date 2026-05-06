package com.inmob2.backend.model.entity.roles;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "administrador")
@Getter
@Setter
@NoArgsConstructor
public class Administrador extends RolInterno {

    @Column(name = "area_supervision", length = 50)
    private String areaSupervision; // Ej: Finanzas, RRHH
}
