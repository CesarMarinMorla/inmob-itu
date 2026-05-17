package com.inmob2.backend.model.entity;

import com.inmob2.backend.model.entity.enums.NivelAcceso;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "usuario")
@Getter
@Setter
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String sub; // Auth0 unique user ID (e.g. "auth0|abc123")

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NivelAcceso nivelAcceso = NivelAcceso.LECTURA;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "persona_id")
    private Persona persona; // optional — not all users are domain personas
}
