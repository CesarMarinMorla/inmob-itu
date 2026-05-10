package com.inmob2.backend.controller;

import com.inmob2.backend.model.dto.UsuarioDTO;
import com.inmob2.backend.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/me")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping("")
    public ResponseEntity<UsuarioDTO> registrarOObtener(@AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(usuarioService.registrarOObtener(jwt.getSubject()));
    }

    @GetMapping("")
    public ResponseEntity<UsuarioDTO> obtenerPorSub(@AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(usuarioService.obtenerPorSub(jwt.getSubject()));
    }
}
