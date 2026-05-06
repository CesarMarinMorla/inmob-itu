package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.PersonaJuridicaDTO;
import com.inmob2.backend.model.entity.PersonaJuridica;
import com.inmob2.backend.repository.PersonaJuridicaRepository;
import com.inmob2.backend.service.mapper.PersonaMapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.function.Supplier;
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

    @Transactional(readOnly = true)
    public List<PersonaJuridicaDTO> obtenerPorRol(String rol) {
        Map<String, Supplier<List<PersonaJuridica>>> queries = Map.of(
                "inquilino", personaJuridicaRepository::findAllWithRolInquilino,
                "propietario", personaJuridicaRepository::findAllWithRolPropietario,
                "garante", personaJuridicaRepository::findAllWithRolGarante,
                "empleado", personaJuridicaRepository::findAllWithRolEmpleado,
                "administrador", personaJuridicaRepository::findAllWithRolAdministrador
        );

        Supplier<List<PersonaJuridica>> query = queries.get(rol.toLowerCase());
        if (query == null) {
            throw new IllegalArgumentException(
                "Tipo de rol no reconocido: '" + rol + "'. Valores válidos: " + queries.keySet());
        }

        return query.get().stream()
                .map(this::convertirADto)
                .collect(Collectors.toList());
    }

    @Transactional
    public PersonaJuridicaDTO guardar(PersonaJuridicaDTO dto) {
        PersonaJuridica entidad = convertirAEntidad(dto);
        PersonaJuridica guardada = personaJuridicaRepository.save(entidad);
        return convertirADto(guardada);
    }

    @Transactional(readOnly = true)
    public PersonaJuridicaDTO obtenerPorCuit(String cuit) {
        return personaJuridicaRepository.findByCuit(cuit)
                .map(this::convertirADto)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró la empresa con CUIT: " + cuit));
    }

    @Transactional(readOnly = true)
    public PersonaJuridicaDTO obtenerPorId(Long id) {
        return personaJuridicaRepository.findById(id)
                .map(this::convertirADto)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró la empresa con ID: " + id));
    }

    @Transactional
    public PersonaJuridicaDTO actualizar(Long id, PersonaJuridicaDTO dto) {
        PersonaJuridica entidad = personaJuridicaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró la persona jurídica con ID: " + id));

        entidad.setRazonSocial(dto.getRazonSocial());
        entidad.setCuit(dto.getCuit());
        entidad.setNombreNegocio(dto.getNombreNegocio());
        entidad.setFechaConstitucion(dto.getFechaConstitucion());

        entidad.getMails().clear();
        entidad.getTelefonos().clear();
        entidad.getDirecciones().clear();
        PersonaMapperUtils.mapearListasHaciaEntidad(dto, entidad);

        PersonaJuridica actualizada = personaJuridicaRepository.save(entidad);
        return convertirADto(actualizada);
    }

    @Transactional
    public void eliminar(Long id) {
        if (!personaJuridicaRepository.existsById(id)) {
            throw new IllegalArgumentException("No se encontró la empresa con ID: " + id);
        }
        try {
            personaJuridicaRepository.deleteById(id);
        } catch (Exception e) {
            throw new IllegalStateException("No se puede eliminar la empresa porque tiene registros asociados (ej: contratos, roles o propiedades).");
        }
    }

    private PersonaJuridicaDTO convertirADto(PersonaJuridica entidad) {
        PersonaJuridicaDTO dto = new PersonaJuridicaDTO();
        
        dto.setRazonSocial(entidad.getRazonSocial());
        dto.setCuit(entidad.getCuit());
        dto.setFechaConstitucion(entidad.getFechaConstitucion());
        dto.setNombreNegocio(entidad.getNombreNegocio());

        PersonaMapperUtils.mapearListasHaciaDto(entidad, dto);

        return dto;
    }

    private PersonaJuridica convertirAEntidad(PersonaJuridicaDTO dto) {
        PersonaJuridica entidad = new PersonaJuridica();
        
        entidad.setRazonSocial(dto.getRazonSocial());
        entidad.setCuit(dto.getCuit());
        entidad.setFechaConstitucion(dto.getFechaConstitucion());
        entidad.setNombreNegocio(dto.getNombreNegocio());

        PersonaMapperUtils.mapearListasHaciaEntidad(dto, entidad);

        return entidad;
    }
}

