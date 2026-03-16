package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.roles.PropietarioDTO;
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
    
    // Aquí a futuro agregaríamos /inquilino, /garante, /empleado, etc.
}
