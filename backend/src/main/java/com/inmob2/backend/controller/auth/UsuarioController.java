package com.inmob2.backend.controller.auth;

import com.inmob2.backend.model.dto.UsuarioDTO;
import com.inmob2.backend.model.entity.Usuario;
import com.inmob2.backend.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/me")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<UsuarioDTO> registrar(@AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(toDto(usuarioService.getOrCreate(jwt)));
    }

    @GetMapping
    public ResponseEntity<UsuarioDTO> perfil(@AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(toDto(usuarioService.getCurrentUsuario(jwt)));
    }

    private UsuarioDTO toDto(Usuario u) {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setId(u.getId());
        dto.setSub(u.getSub());
        dto.setNivelAcceso(u.getNivelAcceso());
        if (u.getPersona() != null) dto.setPersonaId(u.getPersona().getId());
        return dto;
    }
}
