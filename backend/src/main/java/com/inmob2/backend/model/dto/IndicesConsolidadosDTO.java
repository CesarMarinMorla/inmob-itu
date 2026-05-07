package com.inmob2.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IndicesConsolidadosDTO {
    private ArglyIndiceDTO ipc;
    private ArglyIndiceDTO icl;
    private LocalDateTime fechaActualizacion;
    private boolean errorApi; // true si se usó el fallback de BD
}
