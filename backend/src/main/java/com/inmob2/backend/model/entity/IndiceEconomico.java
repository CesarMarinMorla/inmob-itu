package com.inmob2.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "indice_economico")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IndiceEconomico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tipo", nullable = false, unique = true)
    private String tipo; // "IPC" o "ICL"

    @Column(name = "valor", nullable = false)
    private Double valor;

    @Column(name = "fecha_actualizacion", nullable = false)
    private LocalDateTime fechaActualizacion;
}
