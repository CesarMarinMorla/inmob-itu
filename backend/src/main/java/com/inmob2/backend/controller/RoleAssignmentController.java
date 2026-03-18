package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.roles.*;
import com.inmob2.backend.service.RoleAssignmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/personas/{personaId}/roles")
@RequiredArgsConstructor
public class RoleAssignmentController {

    private final RoleAssignmentService roleAssignmentService;

    @PostMapping("/propietario")
    public ResponseEntity<PropietarioDTO> asignarRolPropietario(
            @PathVariable Long personaId,
            @Valid @RequestBody PropietarioDTO dto) {

        PropietarioDTO rolAsignado = roleAssignmentService.asignarRolPropietario(personaId, dto);
        return new ResponseEntity<>(rolAsignado, HttpStatus.CREATED);
    }

    @PostMapping("/inquilino")
    public ResponseEntity<InquilinoDTO> asignarRolInquilino(
            @PathVariable Long personaId,
            @Valid @RequestBody InquilinoDTO dto) {

        InquilinoDTO rolAsignado = roleAssignmentService.asignarRolInquilino(personaId, dto);
        return new ResponseEntity<>(rolAsignado, HttpStatus.CREATED);
    }

    @PostMapping("/garante")
    public ResponseEntity<GaranteDTO> asignarRolGarante(
            @PathVariable Long personaId,
            @Valid @RequestBody GaranteDTO dto) {

        GaranteDTO rolAsignado = roleAssignmentService.asignarRolGarante(personaId, dto);
        return new ResponseEntity<>(rolAsignado, HttpStatus.CREATED);
    }

    @PostMapping("/empleado")
    public ResponseEntity<EmpleadoDTO> asignarRolEmpleado(
            @PathVariable Long personaId,
            @Valid @RequestBody EmpleadoDTO dto) {

        EmpleadoDTO rolAsignado = roleAssignmentService.asignarRolEmpleado(personaId, dto);
        return new ResponseEntity<>(rolAsignado, HttpStatus.CREATED);
    }

    @PostMapping("/administrador")
    public ResponseEntity<AdministradorDTO> asignarRolAdministrador(
            @PathVariable Long personaId,
            @Valid @RequestBody AdministradorDTO dto) {

        AdministradorDTO rolAsignado = roleAssignmentService.asignarRolAdministrador(personaId, dto);
        return new ResponseEntity<>(rolAsignado, HttpStatus.CREATED);
    }
}
