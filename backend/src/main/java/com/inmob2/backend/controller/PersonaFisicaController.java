package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.service.PersonaFisicaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/personas-fisicas")
@RequiredArgsConstructor
public class PersonaFisicaController {

    private final PersonaFisicaService personaFisicaService;

    @GetMapping
    public ResponseEntity<List<PersonaFisicaDTO>> listarTodas() {
        return ResponseEntity.ok(personaFisicaService.obtenerTodas());
    }

    @PostMapping
    public ResponseEntity<PersonaFisicaDTO> crearPersona(@RequestBody PersonaFisicaDTO dto) {
        PersonaFisicaDTO personaGuardada = personaFisicaService.guardar(dto);
        return new ResponseEntity<>(personaGuardada, HttpStatus.CREATED);
    }
}
