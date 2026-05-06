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
import java.util.List;
import java.util.stream.Collectors;

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

    // --- Consulta ---

    @Transactional(readOnly = true)
    public List<RolDTO> obtenerRolesDePersona(Long personaId) {
        Persona persona = buscarPersona(personaId);
        return persona.getRoles().stream()
                .map(this::mapRolToDto)
                .collect(Collectors.toList());
    }

    private RolDTO mapRolToDto(Rol rol) {
        if (rol instanceof Propietario) return mapToPropietarioDto((Propietario) rol);
        if (rol instanceof Inquilino) return mapToInquilinoDto((Inquilino) rol);
        if (rol instanceof Garante) return mapToGaranteDto((Garante) rol);
        if (rol instanceof Empleado) return mapToEmpleadoDto((Empleado) rol);
        if (rol instanceof Administrador) return mapToAdministradorDto((Administrador) rol);
        throw new IllegalStateException("Tipo de rol desconocido: " + rol.getClass().getSimpleName());
    }

    // --- Actualización ---

    @Transactional
    public PropietarioDTO actualizarRolPropietario(Long personaId, Long rolId, PropietarioDTO dto) {
        Propietario propietario = propietarioRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Propietario con ID: " + rolId));
        validarRolPertenece(propietario, personaId);

        propietario.setObservacionesPrivadas(dto.getObservacionesPrivadas());
        propietario.setCuitCuil(dto.getCuitCuil());
        propietario.setCondicionIva(dto.getCondicionIva());
        propietario.setIngresosBrutosNro(dto.getIngresosBrutosNro());
        propietario.setEsPersonaJuridica(dto.getEsPersonaJuridica());
        propietario.setObservacionesPropietario(dto.getObservacionesPropietario());

        return mapToPropietarioDto(propietarioRepository.save(propietario));
    }

    @Transactional
    public InquilinoDTO actualizarRolInquilino(Long personaId, Long rolId, InquilinoDTO dto) {
        Inquilino inquilino = inquilinoRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Inquilino con ID: " + rolId));
        validarRolPertenece(inquilino, personaId);

        inquilino.setObservacionesPrivadas(dto.getObservacionesPrivadas());
        inquilino.setOcupacionPrincipal(dto.getOcupacionPrincipal());
        inquilino.setIngresosMensuales(dto.getIngresosMensuales());
        inquilino.setAntiguedadLaboral(dto.getAntiguedadLaboral());
        inquilino.setAntecedentesMora(dto.getAntecedentesMora());

        return mapToInquilinoDto(inquilinoRepository.save(inquilino));
    }

    @Transactional
    public GaranteDTO actualizarRolGarante(Long personaId, Long rolId, GaranteDTO dto) {
        Garante garante = garanteRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Garante con ID: " + rolId));
        validarRolPertenece(garante, personaId);

        garante.setObservacionesPrivadas(dto.getObservacionesPrivadas());
        garante.setIngresosMensualesComprobables(dto.getIngresosMensualesComprobables());
        garante.setPoseeInmuebles(dto.getPoseeInmuebles());
        garante.setSituacionLaboral(dto.getSituacionLaboral());
        garante.setObservacionesGarante(dto.getObservacionesGarante());

        return mapToGaranteDto(garanteRepository.save(garante));
    }

    @Transactional
    public EmpleadoDTO actualizarRolEmpleado(Long personaId, Long rolId, EmpleadoDTO dto) {
        Empleado empleado = empleadoRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Empleado con ID: " + rolId));
        validarRolPertenece(empleado, personaId);

        empleado.setLegajo(dto.getLegajo());
        empleado.setNombreUsuario(dto.getNombreUsuario());
        empleado.setPasswordHash(dto.getPasswordHash()); // TODO: Hashear en producción
        empleado.setFechaIngreso(dto.getFechaIngreso());
        empleado.setNivelAcceso(dto.getNivelAcceso());
        empleado.setPuesto(dto.getPuesto());

        return mapToEmpleadoDto(empleadoRepository.save(empleado));
    }

    @Transactional
    public AdministradorDTO actualizarRolAdministrador(Long personaId, Long rolId, AdministradorDTO dto) {
        Administrador admin = administradorRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Administrador con ID: " + rolId));
        validarRolPertenece(admin, personaId);

        admin.setLegajo(dto.getLegajo());
        admin.setNombreUsuario(dto.getNombreUsuario());
        admin.setPasswordHash(dto.getPasswordHash()); // TODO: Hashear en producción
        admin.setFechaIngreso(dto.getFechaIngreso());
        admin.setNivelAcceso(dto.getNivelAcceso());
        admin.setAreaSupervision(dto.getAreaSupervision());

        return mapToAdministradorDto(administradorRepository.save(admin));
    }

    // --- Eliminación ---

    @Transactional
    public void eliminarRolPropietario(Long personaId, Long rolId) {
        Propietario propietario = propietarioRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Propietario con ID: " + rolId));
        validarRolPertenece(propietario, personaId);

        propietario.getPersona().removeRol(propietario);
        propietarioRepository.delete(propietario);
    }

    @Transactional
    public void eliminarRolInquilino(Long personaId, Long rolId) {
        Inquilino inquilino = inquilinoRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Inquilino con ID: " + rolId));
        validarRolPertenece(inquilino, personaId);

        inquilino.getPersona().removeRol(inquilino);
        inquilinoRepository.delete(inquilino);
    }

    @Transactional
    public void eliminarRolGarante(Long personaId, Long rolId) {
        Garante garante = garanteRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Garante con ID: " + rolId));
        validarRolPertenece(garante, personaId);

        garante.getPersona().removeRol(garante);
        garanteRepository.delete(garante);
    }

    @Transactional
    public void eliminarRolEmpleado(Long personaId, Long rolId) {
        Empleado empleado = empleadoRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Empleado con ID: " + rolId));
        validarRolPertenece(empleado, personaId);

        empleado.getPersona().removeRol(empleado);
        empleadoRepository.delete(empleado);
    }

    @Transactional
    public void eliminarRolAdministrador(Long personaId, Long rolId) {
        Administrador admin = administradorRepository.findById(rolId)
                .orElseThrow(() -> new IllegalArgumentException("No se encontró el rol Administrador con ID: " + rolId));
        validarRolPertenece(admin, personaId);

        admin.getPersona().removeRol(admin);
        administradorRepository.delete(admin);
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

    private void validarRolPertenece(Rol rol, Long personaId) {
        if (!rol.getPersona().getId().equals(personaId)) {
            throw new IllegalArgumentException("El rol con ID " + rol.getId() + " no pertenece a la persona con ID: " + personaId);
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
