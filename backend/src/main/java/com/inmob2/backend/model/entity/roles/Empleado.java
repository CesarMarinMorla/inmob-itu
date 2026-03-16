package com.inmob2.backend.model.entity.roles;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("EMPLEADO")
@Getter
@Setter
@NoArgsConstructor
public class Empleado extends RolInterno {

    @Column(name = "puesto", length = 50)
    private String puesto; // Ej: Agente de Ventas, Recepcionista
}
