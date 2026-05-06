package com.inmob2.backend.model.entity;

import com.inmob2.backend.model.entity.enums.TipoMail;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "mail_persona")
@Getter
@Setter
@NoArgsConstructor
public class MailPersona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* 
     * @ToString.Exclude y @EqualsAndHashCode.Exclude son VITALES aquí para evitar
     * el StackOverflowError (bucle infinito si usamos toString sobre la Lista del Padre).
     */
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "persona_id", nullable = false)
    private Persona persona;

    @Column(name = "email", nullable = false, length = 150)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo", nullable = false, length = 20)
    private TipoMail tipo;

    @Column(name = "es_principal", nullable = false)
    private Boolean esPrincipal = false;
}
