package com.inmob2.backend.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "persona_juridica")
@Getter
@Setter
@NoArgsConstructor
public class PersonaJuridica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "razon_social", nullable = false, length = 100)
    private String razonSocial;

    @Column(name = "cuit", nullable = false, unique = true, length = 20)
    private String cuit;

    @Column(name = "fecha_constitucion")
    private LocalDate fechaConstitucion;

    @Column(name = "nombre_negocio", length = 100)
    private String nombreNegocio;
}
