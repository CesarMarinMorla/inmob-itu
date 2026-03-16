package com.inmob2.backend.model.entity;

import com.inmob2.backend.model.entity.enums.TipoDomicilio;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "direccion_persona")
@Getter
@Setter
@NoArgsConstructor
public class DireccionPersona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "persona_id", nullable = false)
    private Persona persona;

    @Column(name = "calle", nullable = false, length = 150)
    private String calle;

    @Column(name = "altura")
    private Integer altura;

    @Column(name = "piso", length = 10)
    private String piso;

    @Column(name = "departamento", length = 10)
    private String departamento;

    @Column(name = "barrio", length = 100)
    private String barrio;

    @Column(name = "localidad", length = 100)
    private String localidad;

    @Column(name = "provincia", length = 100)
    private String provincia;

    @Column(name = "codigo_postal", length = 20)
    private String codigoPostal;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_domicilio", nullable = false, length = 20)
    private TipoDomicilio tipoDomicilio;
}
