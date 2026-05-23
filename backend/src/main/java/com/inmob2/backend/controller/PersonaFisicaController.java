package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.model.response.PageResponse;
import com.inmob2.backend.service.PersonaFisicaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/personas-fisicas")
@RequiredArgsConstructor
public class PersonaFisicaController {

    private final PersonaFisicaService personaFisicaService;

    @GetMapping
    public ResponseEntity<PageResponse<PersonaFisicaDTO>> listarTodas(
            @RequestParam(required = false) String rol,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        var pageable = PageRequest.of(page, size, Sort.by("id").descending());
        var resultado = (rol != null && !rol.isBlank())
                ? personaFisicaService.obtenerPorRol(rol, pageable)
                : personaFisicaService.obtenerTodas(pageable);
        return ResponseEntity.ok(PageResponse.fromPage(resultado));
    }

    @GetMapping("/{dni}")
    public ResponseEntity<PersonaFisicaDTO> obtenerPorDni(@PathVariable String dni) {
        return ResponseEntity.ok(personaFisicaService.obtenerPorDni(dni));
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<PersonaFisicaDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(personaFisicaService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<PersonaFisicaDTO> crearPersona(@Valid @RequestBody PersonaFisicaDTO dto) {
        PersonaFisicaDTO personaGuardada = personaFisicaService.guardar(dto);
        return new ResponseEntity<>(personaGuardada, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PersonaFisicaDTO> actualizarPersona(
            @PathVariable Long id, 
            @Valid @RequestBody PersonaFisicaDTO dto) {
        return ResponseEntity.ok(personaFisicaService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPersona(@PathVariable Long id) {
        personaFisicaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
