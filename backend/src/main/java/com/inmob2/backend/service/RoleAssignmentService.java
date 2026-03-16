package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.roles.PropietarioDTO;
import com.inmob2.backend.model.entity.Persona;
import com.inmob2.backend.model.entity.roles.Propietario;
import com.inmob2.backend.repository.PersonaRepository;
import com.inmob2.backend.repository.roles.PropietarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class RoleAssignmentService {

    private final PersonaRepository personaRepository;
    private final PropietarioRepository propietarioRepository;

    @Transactional
    public PropietarioDTO asignarRolPropietario(Long personaId, PropietarioDTO dto) {
        // 1. Buscamos la persona (física o jurídica no importa, PersonaRepository encuentra ambas)
        Persona persona = personaRepository.findById(personaId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró una persona con el ID: " + personaId));

        // 2. Mapeamos la Entidad Rol a partir del DTO
        Propietario propietario = new Propietario();
        propietario.setFechaAlta(LocalDate.now()); // Regla de negocio: El alta es la fecha actual
        propietario.setObservacionesPrivadas(dto.getObservacionesPrivadas());
        propietario.setCuitCuil(dto.getCuitCuil());
        propietario.setCondicionIva(dto.getCondicionIva());
        propietario.setIngresosBrutosNro(dto.getIngresosBrutosNro());
        propietario.setEsPersonaJuridica(dto.getEsPersonaJuridica());
        propietario.setObservacionesPropietario(dto.getObservacionesPropietario());

        // 3. Ejecutamos el Helper Method bidireccional
        persona.addRol(propietario);

        // 4. Guardamos el rol transaccionalmente 
        // (Al tener cascade = CascadeType.ALL en roles de Persona, save() a Persona también lo guardaría, 
        //  pero al usar explícitamente el repo del Rol aseguramos devolver la Entidad fresquita con ID)
        Propietario rolGuardado = propietarioRepository.save(propietario);

        // 5. Devolvemos el DTO enriquecido
        return mapToDto(rolGuardado);
    }

    private PropietarioDTO mapToDto(Propietario entidad) {
        PropietarioDTO dto = new PropietarioDTO();
        dto.setId(entidad.getId());
        dto.setFechaAlta(entidad.getFechaAlta());
        dto.setPersonaId(entidad.getPersona().getId());
        dto.setObservacionesPrivadas(entidad.getObservacionesPrivadas());
        dto.setCuitCuil(entidad.getCuitCuil());
        dto.setCondicionIva(entidad.getCondicionIva());
        dto.setIngresosBrutosNro(entidad.getIngresosBrutosNro());
        dto.setEsPersonaJuridica(entidad.getEsPersonaJuridica());
        dto.setObservacionesPropietario(entidad.getObservacionesPropietario());
        return dto;
    }
}
