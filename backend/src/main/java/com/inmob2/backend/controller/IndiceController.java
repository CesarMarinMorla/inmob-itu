package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.IndicesConsolidadosDTO;
import com.inmob2.backend.service.IndiceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/v1/indices")
@CrossOrigin(origins = "http://localhost:5173") // Ajustar si el puerto de Vite es otro
public class IndiceController {

    private final IndiceService indiceService;

    public IndiceController(IndiceService indiceService) {
        this.indiceService = indiceService;
    }

    @GetMapping
    public ResponseEntity<IndicesConsolidadosDTO> getIndices() {
        return ResponseEntity.ok(indiceService.getIndices());
    }
}
