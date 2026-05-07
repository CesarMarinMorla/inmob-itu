package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.IndiceDTO;
import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import com.inmob2.backend.service.indice.IndiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Expone los índices económicos (IPC, ICL) ya procesados por nuestro backend.
 * El frontend nunca llama directamente a Argly: pasa por estos endpoints para
 * aprovechar cache, fallback y CORS configurado.
 */
@RestController
@RequestMapping("/api/v1/indices")
@RequiredArgsConstructor
public class IndiceController {

    private final IndiceService indiceService;

    /** Devuelve los dos índices (IPC + ICL) en una sola llamada — usado por el dashboard. */
    @GetMapping
    public ResponseEntity<List<IndiceDTO>> listarTodos() {
        return ResponseEntity.ok(indiceService.obtenerTodos());
    }

    /** Devuelve un índice puntual. Útil para vistas de detalle o cálculo de ajuste. */
    @GetMapping("/{tipo}")
    public ResponseEntity<IndiceDTO> obtenerPorTipo(@PathVariable IndiceAjuste tipo) {
        return ResponseEntity.ok(indiceService.obtener(tipo));
    }
}
