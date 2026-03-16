package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.propiedad.CasaDTO;
import com.inmob2.backend.service.CasaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/casas")
@RequiredArgsConstructor
public class CasaController {

    private final CasaService casaService;

    @GetMapping
    public ResponseEntity<List<CasaDTO>> listarTodas() {
        return ResponseEntity.ok(casaService.obtenerTodas());
    }

    @PostMapping
    public ResponseEntity<CasaDTO> crearCasa(@Valid @RequestBody CasaDTO dto) {
        CasaDTO guardado = casaService.guardar(dto);
        return new ResponseEntity<>(guardado, HttpStatus.CREATED);
    }
}
