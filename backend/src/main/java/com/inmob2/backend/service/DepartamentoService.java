package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.propiedad.DepartamentoDTO;
import com.inmob2.backend.model.entity.propiedad.Departamento;
import com.inmob2.backend.repository.propiedad.DepartamentoRepository;
import com.inmob2.backend.service.mapper.PropiedadMapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DepartamentoService {

    private final DepartamentoRepository departamentoRepository;
    private final PropiedadMapperUtils propiedadMapper;

    @Transactional(readOnly = true)
    public Page<DepartamentoDTO> obtenerTodos(Pageable pageable) {
        return departamentoRepository.findAll(pageable).map(this::mapToDto);
    }

    @Transactional(readOnly = true)
    public DepartamentoDTO obtenerPorId(Long id) {
        return departamentoRepository.findById(id)
                .map(this::mapToDto)
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Departamento no encontrado con id: " + id));
    }

    @Transactional
    public void eliminar(Long id) {
        if (!departamentoRepository.existsById(id))
            throw new jakarta.persistence.EntityNotFoundException("Departamento no encontrado con id: " + id);
        departamentoRepository.deleteById(id);
    }

    @Transactional
    public DepartamentoDTO actualizar(Long id, DepartamentoDTO dto) {
        Departamento entidad = departamentoRepository.findById(id)
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Departamento no encontrado con id: " + id));
        propiedadMapper.mapearCamposBasePropiedadHaciaEntidad(dto, entidad);
        entidad.setAmbientesNum(dto.getAmbientesNum());
        entidad.setDormitoriosNum(dto.getDormitoriosNum());
        entidad.setBaniosNum(dto.getBaniosNum());
        entidad.setMascotas(dto.getMascotas());
        entidad.setAptoProfesional(dto.getAptoProfesional());
        entidad.setAnioConstruccion(dto.getAnioConstruccion());
        entidad.setPiso(dto.getPiso());
        entidad.setLetraNumero(dto.getLetraNumero());
        entidad.setExpensasMonto(dto.getExpensasMonto());
        entidad.setDisposicion(dto.getDisposicion());
        entidad.setAmenities(dto.getAmenities());
        return mapToDto(departamentoRepository.save(entidad));
    }

    @Transactional
    public DepartamentoDTO guardar(DepartamentoDTO dto) {
        Departamento departamento = mapToEntity(dto);
        Departamento departamentoGuardado = departamentoRepository.save(departamento);
        return mapToDto(departamentoGuardado);
    }

    private DepartamentoDTO mapToDto(Departamento entidad) {
        DepartamentoDTO dto = new DepartamentoDTO();
        propiedadMapper.mapearCamposBasePropiedadHaciaDto(entidad, dto);
        
        // UnidadHabitacional fields
        dto.setAmbientesNum(entidad.getAmbientesNum());
        dto.setDormitoriosNum(entidad.getDormitoriosNum());
        dto.setBaniosNum(entidad.getBaniosNum());
        dto.setMascotas(entidad.getMascotas());
        dto.setAptoProfesional(entidad.getAptoProfesional());
        dto.setAnioConstruccion(entidad.getAnioConstruccion());
        
        // Departamento fields
        dto.setPiso(entidad.getPiso());
        dto.setLetraNumero(entidad.getLetraNumero());
        dto.setExpensasMonto(entidad.getExpensasMonto());
        dto.setDisposicion(entidad.getDisposicion());
        dto.setAmenities(entidad.getAmenities());
        
        return dto;
    }

    private Departamento mapToEntity(DepartamentoDTO dto) {
        Departamento entidad = new Departamento();
        propiedadMapper.mapearCamposBasePropiedadHaciaEntidad(dto, entidad);
        
        // UnidadHabitacional fields
        entidad.setAmbientesNum(dto.getAmbientesNum());
        entidad.setDormitoriosNum(dto.getDormitoriosNum());
        entidad.setBaniosNum(dto.getBaniosNum());
        entidad.setMascotas(dto.getMascotas());
        entidad.setAptoProfesional(dto.getAptoProfesional());
        entidad.setAnioConstruccion(dto.getAnioConstruccion());
        
        // Departamento fields
        entidad.setPiso(dto.getPiso());
        entidad.setLetraNumero(dto.getLetraNumero());
        entidad.setExpensasMonto(dto.getExpensasMonto());
        entidad.setDisposicion(dto.getDisposicion());
        entidad.setAmenities(dto.getAmenities());
        
        return entidad;
    }
}
