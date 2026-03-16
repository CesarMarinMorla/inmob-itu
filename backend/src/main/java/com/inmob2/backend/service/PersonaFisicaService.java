package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.model.entity.PersonaFisica;
import com.inmob2.backend.repository.PersonaFisicaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonaFisicaService {

    private final PersonaFisicaRepository personaFisicaRepository;

    @Transactional(readOnly = true)
    public List<PersonaFisicaDTO> obtenerTodas() {
        return personaFisicaRepository.findAll().stream()
                .map(this::convertirADto)
                .collect(Collectors.toList());
    }

    @Transactional
    public PersonaFisicaDTO guardar(PersonaFisicaDTO dto) {
        PersonaFisica entidad = convertirAEntidad(dto);
        PersonaFisica guardada = personaFisicaRepository.save(entidad);
        return convertirADto(guardada);
    }

    private PersonaFisicaDTO convertirADto(PersonaFisica entidad) {
        PersonaFisicaDTO dto = new PersonaFisicaDTO();
        dto.setId(entidad.getId());
        dto.setPrimerNombre(entidad.getPrimerNombre());
        dto.setSegundoNombre(entidad.getSegundoNombre());
        dto.setPrimerApellido(entidad.getPrimerApellido());
        dto.setSegundoApellido(entidad.getSegundoApellido());
        dto.setTipoDocumento(entidad.getTipoDocumento());
        dto.setNumDocumento(entidad.getNumDocumento());
        dto.setFechaNacimiento(entidad.getFechaNacimiento());
        return dto;
    }

    private PersonaFisica convertirAEntidad(PersonaFisicaDTO dto) {
        PersonaFisica entidad = new PersonaFisica();
        // El id no se setea al crear para permitir que la DB lo genere,
        // (En un caso de "update", si dto.getId() != null, sí se setearía u obtendría de BD primero).
        entidad.setPrimerNombre(dto.getPrimerNombre());
        entidad.setSegundoNombre(dto.getSegundoNombre());
        entidad.setPrimerApellido(dto.getPrimerApellido());
        entidad.setSegundoApellido(dto.getSegundoApellido());
        entidad.setTipoDocumento(dto.getTipoDocumento());
        entidad.setNumDocumento(dto.getNumDocumento());
        entidad.setFechaNacimiento(dto.getFechaNacimiento());
        return entidad;
    }
}
