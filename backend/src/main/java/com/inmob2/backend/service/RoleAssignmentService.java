package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.roles.*;
import com.inmob2.backend.model.entity.Persona;
import com.inmob2.backend.model.entity.roles.*;
import com.inmob2.backend.repository.PersonaRepository;
import com.inmob2.backend.repository.roles.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class RoleAssignmentService {

    private final PersonaRepository personaRepository;
    private final PropietarioRepository propietarioRepository;
    private final InquilinoRepository inquilinoRepository;
    private final GaranteRepository garanteRepository;
    private final EmpleadoRepository empleadoRepository;
    private final AdministradorRepository administradorRepository;

    @Transactional
    public PropietarioDTO asignarRolPropietario(Long personaId, PropietarioDTO dto) {
        Persona persona = buscarPersona(personaId);
        validarRolUnico(persona, Propietario.class);

        Propietario propietario = new Propietario();
        mapearCamposBaseExterno(dto, propietario);
        propietario.setCuitCuil(dto.getCuitCuil());
        propietario.setCondicionIva(dto.getCondicionIva());
        propietario.setIngresosBrutosNro(dto.getIngresosBrutosNro());
        propietario.setEsPersonaJuridica(dto.getEsPersonaJuridica());
        propietario.setObservacionesPropietario(dto.getObservacionesPropietario());

        persona.addRol(propietario);
        return mapToPropietarioDto(propietarioRepository.save(propietario));
    }

    @Transactional
    public InquilinoDTO asignarRolInquilino(Long personaId, InquilinoDTO dto) {
        Persona persona = buscarPersona(personaId);
        validarRolUnico(persona, Inquilino.class);

        Inquilino inquilino = new Inquilino();
        mapearCamposBaseExterno(dto, inquilino);
        inquilino.setOcupacionPrincipal(dto.getOcupacionPrincipal());
        inquilino.setIngresosMensuales(dto.getIngresosMensuales());
        inquilino.setAntiguedadLaboral(dto.getAntiguedadLaboral());
        inquilino.setAntecedentesMora(dto.getAntecedentesMora());

        persona.addRol(inquilino);
        return mapToInquilinoDto(inquilinoRepository.save(inquilino));
    }

    @Transactional
    public GaranteDTO asignarRolGarante(Long personaId, GaranteDTO dto) {
        Persona persona = buscarPersona(personaId);
        validarRolUnico(persona, Garante.class);

        Garante garante = new Garante();
        mapearCamposBaseExterno(dto, garante);
        garante.setIngresosMensualesComprobables(dto.getIngresosMensualesComprobables());
        garante.setPoseeInmuebles(dto.getPoseeInmuebles());
        garante.setSituacionLaboral(dto.getSituacionLaboral());
        garante.setObservacionesGarante(dto.getObservacionesGarante());

        persona.addRol(garante);
        return mapToGaranteDto(garanteRepository.save(garante));
    }

    @Transactional
    public EmpleadoDTO asignarRolEmpleado(Long personaId, EmpleadoDTO dto) {
        Persona persona = buscarPersona(personaId);
        validarRolUnico(persona, Empleado.class);

        Empleado empleado = new Empleado();
        mapearCamposBaseInterno(dto, empleado);
        empleado.setPuesto(dto.getPuesto());

        persona.addRol(empleado);
        return mapToEmpleadoDto(empleadoRepository.save(empleado));
    }

    @Transactional
    public AdministradorDTO asignarRolAdministrador(Long personaId, AdministradorDTO dto) {
        Persona persona = buscarPersona(personaId);
        validarRolUnico(persona, Administrador.class);

        Administrador admin = new Administrador();
        mapearCamposBaseInterno(dto, admin);
        admin.setAreaSupervision(dto.getAreaSupervision());

        persona.addRol(admin);
        return mapToAdministradorDto(administradorRepository.save(admin));
    }

    // --- Helpers ---

    private Persona buscarPersona(Long personaId) {
        return personaRepository.findById(personaId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró la persona con ID: " + personaId));
    }

    private void validarRolUnico(Persona persona, Class<? extends Rol> claseRol) {
        if (persona.getRoles().stream().anyMatch(claseRol::isInstance)) {
            throw new IllegalStateException("La persona ya tiene asignado el rol: " + claseRol.getSimpleName());
        }
    }

    private void mapearCamposBaseExterno(RolExternoDTO dto, RolExterno entidad) {
        entidad.setFechaAlta(LocalDate.now());
        entidad.setObservacionesPrivadas(dto.getObservacionesPrivadas());
    }

    private void mapearCamposBaseInterno(RolInternoDTO dto, RolInterno entidad) {
        entidad.setFechaAlta(LocalDate.now());
        entidad.setLegajo(dto.getLegajo());
        entidad.setNombreUsuario(dto.getNombreUsuario());
        entidad.setPasswordHash(dto.getPasswordHash()); // TODO: Hashear en producción
        entidad.setFechaIngreso(dto.getFechaIngreso());
        entidad.setNivelAcceso(dto.getNivelAcceso());
    }

    // --- Mappers Entidad -> DTO ---

    private PropietarioDTO mapToPropietarioDto(Propietario entidad) {
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

    private InquilinoDTO mapToInquilinoDto(Inquilino entidad) {
        InquilinoDTO dto = new InquilinoDTO();
        dto.setId(entidad.getId());
        dto.setFechaAlta(entidad.getFechaAlta());
        dto.setPersonaId(entidad.getPersona().getId());
        dto.setObservacionesPrivadas(entidad.getObservacionesPrivadas());
        dto.setOcupacionPrincipal(entidad.getOcupacionPrincipal());
        dto.setIngresosMensuales(entidad.getIngresosMensuales());
        dto.setAntiguedadLaboral(entidad.getAntiguedadLaboral());
        dto.setAntecedentesMora(entidad.getAntecedentesMora());
        return dto;
    }

    private GaranteDTO mapToGaranteDto(Garante entidad) {
        GaranteDTO dto = new GaranteDTO();
        dto.setId(entidad.getId());
        dto.setFechaAlta(entidad.getFechaAlta());
        dto.setPersonaId(entidad.getPersona().getId());
        dto.setObservacionesPrivadas(entidad.getObservacionesPrivadas());
        dto.setIngresosMensualesComprobables(entidad.getIngresosMensualesComprobables());
        dto.setPoseeInmuebles(entidad.getPoseeInmuebles());
        dto.setSituacionLaboral(entidad.getSituacionLaboral());
        dto.setObservacionesGarante(entidad.getObservacionesGarante());
        return dto;
    }

    private EmpleadoDTO mapToEmpleadoDto(Empleado entidad) {
        EmpleadoDTO dto = new EmpleadoDTO();
        dto.setId(entidad.getId());
        dto.setFechaAlta(entidad.getFechaAlta());
        dto.setPersonaId(entidad.getPersona().getId());
        dto.setLegajo(entidad.getLegajo());
        dto.setNombreUsuario(entidad.getNombreUsuario());
        dto.setFechaIngreso(entidad.getFechaIngreso());
        dto.setNivelAcceso(entidad.getNivelAcceso());
        dto.setPuesto(entidad.getPuesto());
        return dto;
    }

    private AdministradorDTO mapToAdministradorDto(Administrador entidad) {
        AdministradorDTO dto = new AdministradorDTO();
        dto.setId(entidad.getId());
        dto.setFechaAlta(entidad.getFechaAlta());
        dto.setPersonaId(entidad.getPersona().getId());
        dto.setLegajo(entidad.getLegajo());
        dto.setNombreUsuario(entidad.getNombreUsuario());
        dto.setFechaIngreso(entidad.getFechaIngreso());
        dto.setNivelAcceso(entidad.getNivelAcceso());
        dto.setAreaSupervision(entidad.getAreaSupervision());
        return dto;
    }
}
