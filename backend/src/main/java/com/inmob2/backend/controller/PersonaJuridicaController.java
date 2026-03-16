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
    public ResponseEntity<List<PersonaJuridicaDTO>> listarTodas() {
        return ResponseEntity.ok(personaJuridicaService.obtenerTodas());
    }

    @PostMapping
    public ResponseEntity<PersonaJuridicaDTO> crearPersona(@Valid @RequestBody PersonaJuridicaDTO dto) {
        PersonaJuridicaDTO personaGuardada = personaJuridicaService.guardar(dto);
        return new ResponseEntity<>(personaGuardada, HttpStatus.CREATED);
    }
}
