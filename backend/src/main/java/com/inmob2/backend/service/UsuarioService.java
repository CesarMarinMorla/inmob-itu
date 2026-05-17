package com.inmob2.backend.service;

import com.inmob2.backend.model.entity.Usuario;
import com.inmob2.backend.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Transactional
    public Usuario getOrCreate(Jwt jwt) {
        String sub = jwt.getSubject();
        return usuarioRepository.findBySub(sub).orElseGet(() -> {
            Usuario nuevo = new Usuario();
            nuevo.setSub(sub);
            return usuarioRepository.save(nuevo);
        });
    }

    @Transactional(readOnly = true)
    public Usuario getCurrentUsuario(Jwt jwt) {
        return usuarioRepository.findBySub(jwt.getSubject())
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Usuario no encontrado"));
    }
}
