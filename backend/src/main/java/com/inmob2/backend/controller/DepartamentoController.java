package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.propiedad.DepartamentoDTO;
import com.inmob2.backend.model.response.PageResponse;
import com.inmob2.backend.service.DepartamentoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/departamentos")
@RequiredArgsConstructor
public class DepartamentoController {

    private final DepartamentoService departamentoService;

    @GetMapping
    public ResponseEntity<PageResponse<DepartamentoDTO>> listarTodos(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(PageResponse.fromPage(
                departamentoService.obtenerTodos(PageRequest.of(page, size, Sort.by("id").descending()))));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DepartamentoDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(departamentoService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<DepartamentoDTO> crearDepartamento(@Valid @RequestBody DepartamentoDTO dto) {
        DepartamentoDTO guardado = departamentoService.guardar(dto);
        return new ResponseEntity<>(guardado, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepartamentoDTO> actualizarDepartamento(@PathVariable Long id, @Valid @RequestBody DepartamentoDTO dto) {
        return ResponseEntity.ok(departamentoService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarDepartamento(@PathVariable Long id) {
        departamentoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
