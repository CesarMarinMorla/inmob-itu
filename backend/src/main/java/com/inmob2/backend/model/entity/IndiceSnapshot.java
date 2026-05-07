package com.inmob2.backend.model.entity;

import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Persiste el último valor válido de cada índice (IPC, ICL).
 * <p>
 * Se usa como fallback cuando la API de Argly no responde. La PK es el propio enum
 * (un único registro por tipo de índice), de manera que la tabla siempre tiene a lo
 * sumo dos filas y los upserts son triviales.
 */
@Entity
@Table(name = "indice_snapshot")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IndiceSnapshot {

    @Id
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo", length = 10)
    private IndiceAjuste tipo;

    @Column(name = "valor", nullable = false)
    private Double valor;

    @Column(name = "fecha", nullable = false)
    private LocalDate fecha;

    @Column(name = "actualizado_en", nullable = false)
    private LocalDateTime actualizadoEn;
}
