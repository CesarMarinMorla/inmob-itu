package com.inmob2.backend.model.entity.roles;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "empleado")
@Getter
@Setter
@NoArgsConstructor
public class Empleado extends RolInterno {

    @Column(name = "puesto", length = 50)
    private String puesto; // Ej: Agente de Ventas, Recepcionista
}
