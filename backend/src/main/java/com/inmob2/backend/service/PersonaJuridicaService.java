package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.PersonaJuridicaDTO;
import com.inmob2.backend.model.entity.PersonaJuridica;
import com.inmob2.backend.repository.PersonaJuridicaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonaJuridicaService {

    private final PersonaJuridicaRepository personaJuridicaRepository;

    @Transactional(readOnly = true)
    public List<PersonaJuridicaDTO> obtenerTodas() {
        return personaJuridicaRepository.findAll().stream()
                .map(this::convertirADto)
                .collect(Collectors.toList());
    }

    @Transactional
    public PersonaJuridicaDTO guardar(PersonaJuridicaDTO dto) {
        PersonaJuridica entidad = convertirAEntidad(dto);
        PersonaJuridica guardada = personaJuridicaRepository.save(entidad);
        return convertirADto(guardada);
    }

    private PersonaJuridicaDTO convertirADto(PersonaJuridica entidad) {
        PersonaJuridicaDTO dto = new PersonaJuridicaDTO();
        dto.setId(entidad.getId());
        dto.setRazonSocial(entidad.getRazonSocial());
        dto.setCuit(entidad.getCuit());
        dto.setFechaConstitucion(entidad.getFechaConstitucion());
        dto.setNombreNegocio(entidad.getNombreNegocio());
        return dto;
    }

    private PersonaJuridica convertirAEntidad(PersonaJuridicaDTO dto) {
        PersonaJuridica entidad = new PersonaJuridica();
        entidad.setRazonSocial(dto.getRazonSocial());
        entidad.setCuit(dto.getCuit());
        entidad.setFechaConstitucion(dto.getFechaConstitucion());
        entidad.setNombreNegocio(dto.getNombreNegocio());
        return entidad;
    }
}
