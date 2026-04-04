package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.propiedad.CasaDTO;
import com.inmob2.backend.model.entity.propiedad.Casa;
import com.inmob2.backend.repository.propiedad.CasaRepository;
import com.inmob2.backend.service.mapper.PropiedadMapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CasaService {

    private final CasaRepository casaRepository;
    private final PropiedadMapperUtils propiedadMapper;

    @Transactional(readOnly = true)
    public List<CasaDTO> obtenerTodas() {
        return casaRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public void eliminar(Long id) {
        if (!casaRepository.existsById(id))
            throw new jakarta.persistence.EntityNotFoundException("Casa no encontrada con id: " + id);
        casaRepository.deleteById(id);
    }

    @Transactional
    public CasaDTO actualizar(Long id, CasaDTO dto) {
        Casa entidad = casaRepository.findById(id)
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Casa no encontrada con id: " + id));
        propiedadMapper.mapearCamposBasePropiedadHaciaEntidad(dto, entidad);
        entidad.setAmbientesNum(dto.getAmbientesNum());
        entidad.setDormitoriosNum(dto.getDormitoriosNum());
        entidad.setBaniosNum(dto.getBaniosNum());
        entidad.setMascotas(dto.getMascotas());
        entidad.setAptoProfesional(dto.getAptoProfesional());
        entidad.setAnioConstruccion(dto.getAnioConstruccion());
        entidad.setPlantasNum(dto.getPlantasNum());
        entidad.setJardin(dto.getJardin());
        entidad.setCochera(dto.getCochera());
        entidad.setBarrioCerrado(dto.getBarrioCerrado());
        return mapToDto(casaRepository.save(entidad));
    }

    @Transactional
    public CasaDTO guardar(CasaDTO dto) {
        Casa casa = mapToEntity(dto);
        Casa casaGuardada = casaRepository.save(casa);
        return mapToDto(casaGuardada);
    }

    private CasaDTO mapToDto(Casa entidad) {
        CasaDTO dto = new CasaDTO();
        propiedadMapper.mapearCamposBasePropiedadHaciaDto(entidad, dto);
        
        // UnidadHabitacional fields
        dto.setAmbientesNum(entidad.getAmbientesNum());
        dto.setDormitoriosNum(entidad.getDormitoriosNum());
        dto.setBaniosNum(entidad.getBaniosNum());
        dto.setMascotas(entidad.getMascotas());
        dto.setAptoProfesional(entidad.getAptoProfesional());
        dto.setAnioConstruccion(entidad.getAnioConstruccion());
        
        // Casa fields
        dto.setPlantasNum(entidad.getPlantasNum());
        dto.setJardin(entidad.getJardin());
        dto.setCochera(entidad.getCochera());
        dto.setBarrioCerrado(entidad.getBarrioCerrado());
        
        return dto;
    }

    private Casa mapToEntity(CasaDTO dto) {
        Casa entidad = new Casa();
        propiedadMapper.mapearCamposBasePropiedadHaciaEntidad(dto, entidad);
        
        // UnidadHabitacional fields
        entidad.setAmbientesNum(dto.getAmbientesNum());
        entidad.setDormitoriosNum(dto.getDormitoriosNum());
        entidad.setBaniosNum(dto.getBaniosNum());
        entidad.setMascotas(dto.getMascotas());
        entidad.setAptoProfesional(dto.getAptoProfesional());
        entidad.setAnioConstruccion(dto.getAnioConstruccion());
        
        // Casa fields
        entidad.setPlantasNum(dto.getPlantasNum());
        entidad.setJardin(dto.getJardin());
        entidad.setCochera(dto.getCochera());
        entidad.setBarrioCerrado(dto.getBarrioCerrado());
        
        return entidad;
    }
}
