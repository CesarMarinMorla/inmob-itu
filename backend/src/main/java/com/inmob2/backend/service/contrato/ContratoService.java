package com.inmob2.backend.service.contrato;

import com.inmob2.backend.model.dto.contrato.ContratoDTO;
import com.inmob2.backend.model.entity.contrato.Contrato;
import com.inmob2.backend.model.entity.propiedad.Propiedad;
import com.inmob2.backend.model.entity.roles.Garante;
import com.inmob2.backend.model.entity.roles.Inquilino;
import com.inmob2.backend.model.entity.roles.Propietario;
import com.inmob2.backend.repository.contrato.ContratoRepository;
import com.inmob2.backend.repository.propiedad.PropiedadRepository;
import com.inmob2.backend.repository.roles.GaranteRepository;
import com.inmob2.backend.repository.roles.InquilinoRepository;
import com.inmob2.backend.repository.roles.PropietarioRepository;
import com.inmob2.backend.service.mapper.ContratoMapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContratoService {

    private final ContratoRepository contratoRepository;
    private final PropiedadRepository propiedadRepository;
    private final PropietarioRepository propietarioRepository;
    private final InquilinoRepository inquilinoRepository;
    private final GaranteRepository garanteRepository;

    @Transactional(readOnly = true)
    public Page<ContratoDTO> obtenerTodos(Pageable pageable) {
        return contratoRepository.findAll(pageable).map(this::convertirADto);
    }

    @Transactional(readOnly = true)
    public ContratoDTO obtenerPorId(Long id) {
        return contratoRepository.findById(id)
                .map(this::convertirADto)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró contrato con ID: " + id));
    }

    @Transactional
    public ContratoDTO guardar(ContratoDTO dto) {
        Contrato contrato = new Contrato();
        ContratoMapperUtils.mapToEntity(dto, contrato);
        vincularRelaciones(contrato, dto);

        return convertirADto(contratoRepository.save(contrato));
    }

    @Transactional
    public ContratoDTO actualizar(Long id, ContratoDTO dto) {
        Contrato contrato = contratoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró contrato con ID: " + id));

        ContratoMapperUtils.mapToEntity(dto, contrato);

        // Limpiamos listas antes de renovarlas
        contrato.getPropietarios().clear();
        contrato.getInquilinos().clear();
        contrato.getGarantes().clear();

        vincularRelaciones(contrato, dto);

        return convertirADto(contratoRepository.save(contrato));
    }

    @Transactional
    public void eliminar(Long id) {
        if (!contratoRepository.existsById(id)) {
            throw new IllegalArgumentException("No se encontró contrato con ID: " + id);
        }
        contratoRepository.deleteById(id);
    }

    // --- Helpers Privados ---

    private ContratoDTO convertirADto(Contrato entidad) {
        ContratoDTO dto = new ContratoDTO();
        ContratoMapperUtils.mapToDto(entidad, dto);
        return dto;
    }

    private void vincularRelaciones(Contrato contrato, ContratoDTO dto) {
        // 1. Propiedad
        Propiedad propiedad = propiedadRepository.findById(dto.getPropiedadAlquiladaId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "No se encontró Propiedad con ID: " + dto.getPropiedadAlquiladaId()));
        contrato.setPropiedadAlquilada(propiedad);

        // 2. Propietarios
        if (dto.getPropietariosIds() != null && !dto.getPropietariosIds().isEmpty()) {
            List<Propietario> propietarios = propietarioRepository.findAllById(dto.getPropietariosIds());
            if (propietarios.size() != dto.getPropietariosIds().size()) {
                throw new IllegalArgumentException("Alguno de los IDs de propietario no existe.");
            }
            propietarios.forEach(contrato::addPropietario);
        }

        // 3. Inquilinos
        if (dto.getInquilinosIds() != null && !dto.getInquilinosIds().isEmpty()) {
            List<Inquilino> inquilinos = inquilinoRepository.findAllById(dto.getInquilinosIds());
            if (inquilinos.size() != dto.getInquilinosIds().size()) {
                throw new IllegalArgumentException("Alguno de los IDs de inquilino no existe.");
            }
            inquilinos.forEach(contrato::addInquilino);
        }

        // 4. Garantes (Opcional)
        if (dto.getGarantesIds() != null && !dto.getGarantesIds().isEmpty()) {
            List<Garante> garantes = garanteRepository.findAllById(dto.getGarantesIds());
            if (garantes.size() != dto.getGarantesIds().size()) {
                throw new IllegalArgumentException("Alguno de los IDs de garante no existe.");
            }
            garantes.forEach(contrato::addGarante);
        }
    }
}
