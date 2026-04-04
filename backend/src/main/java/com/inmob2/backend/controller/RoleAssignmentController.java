package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.roles.*;
import com.inmob2.backend.service.RoleAssignmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/personas/{personaId}/roles")
@RequiredArgsConstructor
public class RoleAssignmentController {

    private final RoleAssignmentService roleAssignmentService;

    @GetMapping
    public ResponseEntity<List<RolDTO>> obtenerRoles(@PathVariable Long personaId) {
        List<RolDTO> roles = roleAssignmentService.obtenerRolesDePersona(personaId);
        return ResponseEntity.ok(roles);
    }

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

    @PutMapping("/propietario/{rolId}")
    public ResponseEntity<PropietarioDTO> actualizarRolPropietario(
            @PathVariable Long personaId,
            @PathVariable Long rolId,
            @Valid @RequestBody PropietarioDTO dto) {

        return ResponseEntity.ok(roleAssignmentService.actualizarRolPropietario(personaId, rolId, dto));
    }

    @PutMapping("/inquilino/{rolId}")
    public ResponseEntity<InquilinoDTO> actualizarRolInquilino(
            @PathVariable Long personaId,
            @PathVariable Long rolId,
            @Valid @RequestBody InquilinoDTO dto) {

        return ResponseEntity.ok(roleAssignmentService.actualizarRolInquilino(personaId, rolId, dto));
    }

    @PutMapping("/garante/{rolId}")
    public ResponseEntity<GaranteDTO> actualizarRolGarante(
            @PathVariable Long personaId,
            @PathVariable Long rolId,
            @Valid @RequestBody GaranteDTO dto) {

        return ResponseEntity.ok(roleAssignmentService.actualizarRolGarante(personaId, rolId, dto));
    }

    @PutMapping("/empleado/{rolId}")
    public ResponseEntity<EmpleadoDTO> actualizarRolEmpleado(
            @PathVariable Long personaId,
            @PathVariable Long rolId,
            @Valid @RequestBody EmpleadoDTO dto) {

        return ResponseEntity.ok(roleAssignmentService.actualizarRolEmpleado(personaId, rolId, dto));
    }

    @PutMapping("/administrador/{rolId}")
    public ResponseEntity<AdministradorDTO> actualizarRolAdministrador(
            @PathVariable Long personaId,
            @PathVariable Long rolId,
            @Valid @RequestBody AdministradorDTO dto) {

        return ResponseEntity.ok(roleAssignmentService.actualizarRolAdministrador(personaId, rolId, dto));
    }

    @DeleteMapping("/propietario/{rolId}")
    public ResponseEntity<Void> eliminarRolPropietario(
            @PathVariable Long personaId,
            @PathVariable Long rolId) {

        roleAssignmentService.eliminarRolPropietario(personaId, rolId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/inquilino/{rolId}")
    public ResponseEntity<Void> eliminarRolInquilino(
            @PathVariable Long personaId,
            @PathVariable Long rolId) {

        roleAssignmentService.eliminarRolInquilino(personaId, rolId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/garante/{rolId}")
    public ResponseEntity<Void> eliminarRolGarante(
            @PathVariable Long personaId,
            @PathVariable Long rolId) {

        roleAssignmentService.eliminarRolGarante(personaId, rolId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/empleado/{rolId}")
    public ResponseEntity<Void> eliminarRolEmpleado(
            @PathVariable Long personaId,
            @PathVariable Long rolId) {

        roleAssignmentService.eliminarRolEmpleado(personaId, rolId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/administrador/{rolId}")
    public ResponseEntity<Void> eliminarRolAdministrador(
            @PathVariable Long personaId,
            @PathVariable Long rolId) {

        roleAssignmentService.eliminarRolAdministrador(personaId, rolId);
        return ResponseEntity.noContent().build();
    }
}
