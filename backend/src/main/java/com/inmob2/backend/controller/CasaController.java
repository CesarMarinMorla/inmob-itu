package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.propiedad.CasaDTO;
import com.inmob2.backend.model.response.PageResponse;
import com.inmob2.backend.service.CasaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/casas")
@RequiredArgsConstructor
public class CasaController {

    private final CasaService casaService;

    @GetMapping
    public ResponseEntity<PageResponse<CasaDTO>> listarTodas(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(PageResponse.fromPage(
                casaService.obtenerTodas(PageRequest.of(page, size, Sort.by("id").descending()))));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CasaDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(casaService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<CasaDTO> crearCasa(@Valid @RequestBody CasaDTO dto) {
        CasaDTO guardado = casaService.guardar(dto);
        return new ResponseEntity<>(guardado, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CasaDTO> actualizarCasa(@PathVariable Long id, @Valid @RequestBody CasaDTO dto) {
        return ResponseEntity.ok(casaService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCasa(@PathVariable Long id) {
        casaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
