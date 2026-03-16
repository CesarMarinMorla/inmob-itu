package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.propiedad.TerrenoDTO;
import com.inmob2.backend.model.entity.propiedad.Terreno;
import com.inmob2.backend.repository.propiedad.TerrenoRepository;
import com.inmob2.backend.service.mapper.PropiedadMapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TerrenoService {

    private final TerrenoRepository terrenoRepository;
    private final PropiedadMapperUtils propiedadMapper;

    @Transactional(readOnly = true)
    public List<TerrenoDTO> obtenerTodos() {
        return terrenoRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public TerrenoDTO guardar(TerrenoDTO dto) {
        Terreno terreno = mapToEntity(dto);
        Terreno terrenoGuardado = terrenoRepository.save(terreno);
        return mapToDto(terrenoGuardado);
    }

    private TerrenoDTO mapToDto(Terreno entidad) {
        TerrenoDTO dto = new TerrenoDTO();
        propiedadMapper.mapearCamposBasePropiedadHaciaDto(entidad, dto);
        
        dto.setAplicaRendimiento(entidad.getAplicaRendimiento());
        dto.setSuperficieProduccion(entidad.getSuperficieProduccion());
        dto.setPerimetro(entidad.getPerimetro());
        
        return dto;
    }

    private Terreno mapToEntity(TerrenoDTO dto) {
        Terreno entidad = new Terreno();
        propiedadMapper.mapearCamposBasePropiedadHaciaEntidad(dto, entidad);
        
        entidad.setAplicaRendimiento(dto.getAplicaRendimiento());
        entidad.setSuperficieProduccion(dto.getSuperficieProduccion());
        entidad.setPerimetro(dto.getPerimetro());
        
        return entidad;
    }
}
