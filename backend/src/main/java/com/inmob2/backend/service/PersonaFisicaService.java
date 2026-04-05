package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.model.entity.PersonaFisica;
import com.inmob2.backend.repository.PersonaFisicaRepository;
import com.inmob2.backend.service.mapper.PersonaMapperUtils;
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

    @Transactional(readOnly = true)
    public PersonaFisicaDTO obtenerPorDni(String dni) {
        return personaFisicaRepository.findByNumDocumento(dni)
                .map(this::convertirADto)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró la persona con DNI: " + dni));
    }

    @Transactional(readOnly = true)
    public PersonaFisicaDTO obtenerPorId(Long id) {
        return personaFisicaRepository.findById(id)
                .map(this::convertirADto)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró la persona con ID: " + id));
    }

    @Transactional
    public PersonaFisicaDTO actualizar(Long id, PersonaFisicaDTO dto) {
        PersonaFisica entidad = personaFisicaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró la persona con ID: " + id));

        // Actualizamos datos básicos
        entidad.setPrimerNombre(dto.getPrimerNombre());
        entidad.setSegundoNombre(dto.getSegundoNombre());
        entidad.setPrimerApellido(dto.getPrimerApellido());
        entidad.setSegundoApellido(dto.getSegundoApellido());
        entidad.setTipoDocumento(dto.getTipoDocumento());
        entidad.setNumDocumento(dto.getNumDocumento());
        entidad.setFechaNacimiento(dto.getFechaNacimiento());

        // Para actualizar colecciones con orphanRemoval=true, limpiamos y re-mapeamos
        entidad.getMails().clear();
        entidad.getTelefonos().clear();
        entidad.getDirecciones().clear();
        PersonaMapperUtils.mapearListasHaciaEntidad(dto, entidad);

        PersonaFisica actualizada = personaFisicaRepository.save(entidad);
        return convertirADto(actualizada);
    }

    @Transactional
    public void eliminar(Long id) {
        if (!personaFisicaRepository.existsById(id)) {
            throw new IllegalArgumentException("No se encontró la persona con ID: " + id);
        }
        try {
            personaFisicaRepository.deleteById(id);
        } catch (Exception e) {
            throw new IllegalStateException("No se puede eliminar la persona porque tiene registros asociados (ej: es propietaria de un inmueble o tiene contratos activos).");
        }
    }

    private PersonaFisicaDTO convertirADto(PersonaFisica entidad) {
        PersonaFisicaDTO dto = new PersonaFisicaDTO();
        
        // Asignamos propiedades específicas de Física
        dto.setPrimerNombre(entidad.getPrimerNombre());
        dto.setSegundoNombre(entidad.getSegundoNombre());
        dto.setPrimerApellido(entidad.getPrimerApellido());
        dto.setSegundoApellido(entidad.getSegundoApellido());
        dto.setTipoDocumento(entidad.getTipoDocumento());
        dto.setNumDocumento(entidad.getNumDocumento());
        dto.setFechaNacimiento(entidad.getFechaNacimiento());

        // Reutilizamos el mapeo de listas común a todas las Personas
        PersonaMapperUtils.mapearListasHaciaDto(entidad, dto);

        return dto;
    }

    private PersonaFisica convertirAEntidad(PersonaFisicaDTO dto) {
        PersonaFisica entidad = new PersonaFisica();
        
        // Asignamos propiedades específicas de Física
        entidad.setPrimerNombre(dto.getPrimerNombre());
        entidad.setSegundoNombre(dto.getSegundoNombre());
        entidad.setPrimerApellido(dto.getPrimerApellido());
        entidad.setSegundoApellido(dto.getSegundoApellido());
        entidad.setTipoDocumento(dto.getTipoDocumento());
        entidad.setNumDocumento(dto.getNumDocumento());
        entidad.setFechaNacimiento(dto.getFechaNacimiento());

        // Reutilizamos el mapeo de listas común a todas las Personas
        PersonaMapperUtils.mapearListasHaciaEntidad(dto, entidad);

        return entidad;
    }
}


