package com.inmob2.backend.model.entity.roles;

import com.inmob2.backend.model.entity.enums.NivelAcceso;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "rol_interno")
@Getter
@Setter
@NoArgsConstructor
public abstract class RolInterno extends Rol {

    @Column(name = "legajo", unique = true, length = 50)
    private String legajo;

    @Column(name = "nombre_usuario", unique = true, length = 50)
    private String nombreUsuario;

    @Column(name = "password_hash", length = 255)
    private String passwordHash;

    @Column(name = "fecha_ingreso")
    private LocalDate fechaIngreso;

    @Enumerated(EnumType.STRING)
    @Column(name = "nivel_acceso", length = 20)
    private NivelAcceso nivelAcceso;
}
