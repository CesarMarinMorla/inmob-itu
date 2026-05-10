package com.inmob2.backend.controller.contrato;

import com.inmob2.backend.model.dto.contrato.ContratoDTO;
import com.inmob2.backend.service.contrato.ContratoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contratos")
@RequiredArgsConstructor
public class ContratoController {

    private final ContratoService contratoService;

    @GetMapping
    public ResponseEntity<List<ContratoDTO>> listarTodos() {
        return ResponseEntity.ok(contratoService.obtenerTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContratoDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(contratoService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<ContratoDTO> crearContrato(@Valid @RequestBody ContratoDTO dto) {
        ContratoDTO creado = contratoService.guardar(dto);
        return new ResponseEntity<>(creado, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContratoDTO> actualizarContrato(
            @PathVariable Long id, 
            @Valid @RequestBody ContratoDTO dto) {
        return ResponseEntity.ok(contratoService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarContrato(@PathVariable Long id) {
        contratoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
