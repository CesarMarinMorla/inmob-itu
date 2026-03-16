package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.propiedad.DepartamentoDTO;
import com.inmob2.backend.service.DepartamentoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/departamentos")
@RequiredArgsConstructor
public class DepartamentoController {

    private final DepartamentoService departamentoService;

    @GetMapping
    public ResponseEntity<List<DepartamentoDTO>> listarTodos() {
        return ResponseEntity.ok(departamentoService.obtenerTodos());
    }

    @PostMapping
    public ResponseEntity<DepartamentoDTO> crearDepartamento(@Valid @RequestBody DepartamentoDTO dto) {
        DepartamentoDTO guardado = departamentoService.guardar(dto);
        return new ResponseEntity<>(guardado, HttpStatus.CREATED);
    }
}
