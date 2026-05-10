package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.PersonaJuridicaDTO;
import com.inmob2.backend.service.PersonaJuridicaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/personas-juridicas")
@RequiredArgsConstructor
public class PersonaJuridicaController {

    private final PersonaJuridicaService personaJuridicaService;

    @GetMapping
    public ResponseEntity<List<PersonaJuridicaDTO>> listarTodas(
            @RequestParam(required = false) String rol) {
        List<PersonaJuridicaDTO> resultado = (rol != null && !rol.isBlank())
                ? personaJuridicaService.obtenerPorRol(rol)
                : personaJuridicaService.obtenerTodas();
        return ResponseEntity.ok(resultado);
    }

    @GetMapping("/cuit/{cuit}")
    public ResponseEntity<PersonaJuridicaDTO> obtenerPorCuit(@PathVariable String cuit) {
        return ResponseEntity.ok(personaJuridicaService.obtenerPorCuit(cuit));
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<PersonaJuridicaDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(personaJuridicaService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<PersonaJuridicaDTO> crearPersona(@Valid @RequestBody PersonaJuridicaDTO dto) {
        PersonaJuridicaDTO personaGuardada = personaJuridicaService.guardar(dto);
        return new ResponseEntity<>(personaGuardada, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PersonaJuridicaDTO> actualizarPersona(
            @PathVariable Long id, 
            @Valid @RequestBody PersonaJuridicaDTO dto) {
        return ResponseEntity.ok(personaJuridicaService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPersona(@PathVariable Long id) {
        personaJuridicaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
