package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.propiedad.TerrenoDTO;
import com.inmob2.backend.service.TerrenoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/terrenos")
@RequiredArgsConstructor
public class TerrenoController {

    private final TerrenoService terrenoService;

    @GetMapping
    public ResponseEntity<List<TerrenoDTO>> listarTodos() {
        return ResponseEntity.ok(terrenoService.obtenerTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TerrenoDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(terrenoService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<TerrenoDTO> crearTerreno(@Valid @RequestBody TerrenoDTO dto) {
        TerrenoDTO guardado = terrenoService.guardar(dto);
        return new ResponseEntity<>(guardado, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TerrenoDTO> actualizarTerreno(@PathVariable Long id, @Valid @RequestBody TerrenoDTO dto) {
        return ResponseEntity.ok(terrenoService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTerreno(@PathVariable Long id) {
        terrenoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
