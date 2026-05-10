package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.UsuarioDTO;
import com.inmob2.backend.model.entity.Usuario;
import com.inmob2.backend.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Transactional
    public UsuarioDTO registrarOObtener(String sub) {
        return usuarioRepository.findBySub(sub)
                .map(this::convertirADTO)
                .orElseGet(() -> {
                    Usuario nuevoUsuario = new Usuario();
                    nuevoUsuario.setSub(sub);
                    nuevoUsuario.setNivelAcceso("ADMIN");
                    nuevoUsuario.setPersonaId(null);
                    return convertirADTO(usuarioRepository.save(nuevoUsuario));
                });
    }

    public UsuarioDTO obtenerPorSub(String sub) {
        return usuarioRepository.findBySub(sub)
                .map(this::convertirADTO)
                .orElseThrow(() -> new IllegalArgumentException("Usuario no registrado: " + sub));
    }

    private UsuarioDTO convertirADTO(Usuario usuario) {
        return new UsuarioDTO(
                usuario.getId(),
                usuario.getSub(),
                usuario.getNivelAcceso(),
                usuario.getPersonaId()
        );
    }
}
