package com.inmob2.backend.service.mapper;

import com.inmob2.backend.model.dto.propiedad.DireccionPropiedadDTO;
import com.inmob2.backend.model.dto.propiedad.PropiedadDTO;
import com.inmob2.backend.model.entity.propiedad.DireccionPropiedad;
import com.inmob2.backend.model.entity.propiedad.Propiedad;
import com.inmob2.backend.model.entity.roles.Propietario;
import com.inmob2.backend.repository.roles.PropietarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class PropiedadMapperUtils {

    private final PropietarioRepository propietarioRepository;

    /**
     * Mapea campos bases (comunes) de Propiedad -> PropiedadDTO
     */
    public void mapearCamposBasePropiedadHaciaDto(Propiedad entidad, PropiedadDTO dto) {
        dto.setId(entidad.getId());
        dto.setCodigoRef(entidad.getCodigoRef());
        dto.setCodigoCatastral(entidad.getCodigoCatastral());
        dto.setEstado(entidad.getEstado());
        dto.setSuperficieTotal(entidad.getSuperficieTotal());
        dto.setSuperficieCubierta(entidad.getSuperficieCubierta());

        if (entidad.getDireccion() != null) {
            DireccionPropiedadDTO dirDto = new DireccionPropiedadDTO();
            dirDto.setId(entidad.getDireccion().getId());
            dirDto.setCalleRuta(entidad.getDireccion().getCalleRuta());
            dirDto.setAlturaKm(entidad.getDireccion().getAlturaKm());
            dirDto.setLocalidad(entidad.getDireccion().getLocalidad());
            dirDto.setProvincia(entidad.getDireccion().getProvincia());
            dirDto.setCodigoPostal(entidad.getDireccion().getCodigoPostal());
            dto.setDireccion(dirDto);
        }

        // Mapea los IDs de los dueños en vez de los objetos completos
        if (entidad.getDueniosLista() != null && !entidad.getDueniosLista().isEmpty()) {
            List<Long> dueniosIds = entidad.getDueniosLista().stream()
                    .map(Propietario::getId) // Asumimos que Propietario hereda getId() de Persona, y Rol hereda getId() ... Espera, Propietario hereda de Rol, no de Persona. Pero Rol tiene getId() 
                    .collect(Collectors.toList());
            dto.setDueniosIds(dueniosIds);
        }
    }

    /**
     * Mapea campos bases (comunes) de PropiedadDTO -> Propiedad
     */
    public void mapearCamposBasePropiedadHaciaEntidad(PropiedadDTO dto, Propiedad entidad) {
        entidad.setCodigoRef(dto.getCodigoRef());
        entidad.setCodigoCatastral(dto.getCodigoCatastral());
        entidad.setEstado(dto.getEstado());
        entidad.setSuperficieTotal(dto.getSuperficieTotal());
        entidad.setSuperficieCubierta(dto.getSuperficieCubierta());

        if (dto.getDireccion() != null) {
            DireccionPropiedad dirEntidad = new DireccionPropiedad();
            if (dto.getDireccion().getId() != null) {
                dirEntidad.setId(dto.getDireccion().getId());
            }
            dirEntidad.setCalleRuta(dto.getDireccion().getCalleRuta());
            dirEntidad.setAlturaKm(dto.getDireccion().getAlturaKm());
            dirEntidad.setLocalidad(dto.getDireccion().getLocalidad());
            dirEntidad.setProvincia(dto.getDireccion().getProvincia());
            dirEntidad.setCodigoPostal(dto.getDireccion().getCodigoPostal());
            
            entidad.setDireccion(dirEntidad); // Usa el Helper Method para setear bidireccional
        }

        // Mapea los IDs enviados desde el Front a objetos Dueño reales de la BD
        if (dto.getDueniosIds() != null && !dto.getDueniosIds().isEmpty()) {
            List<Propietario> dueñosReales = propietarioRepository.findAllById(dto.getDueniosIds());
            // Vinculamos usando el helper bidirectional list
            dueñosReales.forEach(entidad::addPropietario);
        }
    }
}
