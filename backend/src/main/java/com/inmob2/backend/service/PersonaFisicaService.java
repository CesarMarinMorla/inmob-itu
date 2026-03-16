package com.inmob2.backend.service;

import com.inmob2.backend.model.dto.DireccionPersonaDTO;
import com.inmob2.backend.model.dto.MailPersonaDTO;
import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.model.dto.TelefonoPersonaDTO;
import com.inmob2.backend.model.entity.DireccionPersona;
import com.inmob2.backend.model.entity.MailPersona;
import com.inmob2.backend.model.entity.PersonaFisica;
import com.inmob2.backend.model.entity.TelefonoPersona;
import com.inmob2.backend.repository.PersonaFisicaRepository;
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
        // Al guardar la entidad Persona, Hibernate gracias a CascadeType.ALL
        // guardará automáticamente los Mails, Teléfonos y Direcciones asociados.
        PersonaFisica guardada = personaFisicaRepository.save(entidad);
        return convertirADto(guardada);
    }

    private PersonaFisicaDTO convertirADto(PersonaFisica entidad) {
        PersonaFisicaDTO dto = new PersonaFisicaDTO();
        dto.setId(entidad.getId());
        dto.setPrimerNombre(entidad.getPrimerNombre());
        dto.setSegundoNombre(entidad.getSegundoNombre());
        dto.setPrimerApellido(entidad.getPrimerApellido());
        dto.setSegundoApellido(entidad.getSegundoApellido());
        dto.setTipoDocumento(entidad.getTipoDocumento());
        dto.setNumDocumento(entidad.getNumDocumento());
        dto.setFechaNacimiento(entidad.getFechaNacimiento());

        // Mapeo manual de las colecciones hijas hacia el DTO
        if (entidad.getMails() != null) {
            dto.setMails(entidad.getMails().stream().map(mail -> {
                MailPersonaDTO mDto = new MailPersonaDTO();
                mDto.setId(mail.getId());
                mDto.setEmail(mail.getEmail());
                mDto.setTipo(mail.getTipo());
                mDto.setEsPrincipal(mail.getEsPrincipal());
                return mDto;
            }).collect(Collectors.toList()));
        }

        if (entidad.getTelefonos() != null) {
            dto.setTelefonos(entidad.getTelefonos().stream().map(tel -> {
                TelefonoPersonaDTO tDto = new TelefonoPersonaDTO();
                tDto.setId(tel.getId());
                tDto.setNumero(tel.getNumero());
                tDto.setTipo(tel.getTipo());
                return tDto;
            }).collect(Collectors.toList()));
        }

        if (entidad.getDirecciones() != null) {
            dto.setDirecciones(entidad.getDirecciones().stream().map(dir -> {
                DireccionPersonaDTO dDto = new DireccionPersonaDTO();
                dDto.setId(dir.getId());
                dDto.setCalle(dir.getCalle());
                dDto.setAltura(dir.getAltura());
                dDto.setPiso(dir.getPiso());
                dDto.setDepartamento(dir.getDepartamento());
                dDto.setBarrio(dir.getBarrio());
                dDto.setLocalidad(dir.getLocalidad());
                dDto.setProvincia(dir.getProvincia());
                dDto.setCodigoPostal(dir.getCodigoPostal());
                dDto.setTipoDomicilio(dir.getTipoDomicilio());
                return dDto;
            }).collect(Collectors.toList()));
        }

        return dto;
    }

    private PersonaFisica convertirAEntidad(PersonaFisicaDTO dto) {
        PersonaFisica entidad = new PersonaFisica();
        entidad.setPrimerNombre(dto.getPrimerNombre());
        entidad.setSegundoNombre(dto.getSegundoNombre());
        entidad.setPrimerApellido(dto.getPrimerApellido());
        entidad.setSegundoApellido(dto.getSegundoApellido());
        entidad.setTipoDocumento(dto.getTipoDocumento());
        entidad.setNumDocumento(dto.getNumDocumento());
        entidad.setFechaNacimiento(dto.getFechaNacimiento());

        // Mapeo de colecciones DTO hacia Entidad usando los Helper Methods
        if (dto.getMails() != null) {
            dto.getMails().forEach(mDto -> {
                MailPersona mail = new MailPersona();
                mail.setEmail(mDto.getEmail());
                mail.setTipo(mDto.getTipo());
                mail.setEsPrincipal(mDto.getEsPrincipal() != null ? mDto.getEsPrincipal() : false);
                // IMPORTANTE: usamos el helper method para establecer el lazo bidireccional
                entidad.addMail(mail);
            });
        }

        if (dto.getTelefonos() != null) {
            dto.getTelefonos().forEach(tDto -> {
                TelefonoPersona tel = new TelefonoPersona();
                tel.setNumero(tDto.getNumero());
                tel.setTipo(tDto.getTipo());
                entidad.addTelefono(tel);
            });
        }

        if (dto.getDirecciones() != null) {
            dto.getDirecciones().forEach(dDto -> {
                DireccionPersona dir = new DireccionPersona();
                dir.setCalle(dDto.getCalle());
                dir.setAltura(dDto.getAltura());
                dir.setPiso(dDto.getPiso());
                dir.setDepartamento(dDto.getDepartamento());
                dir.setBarrio(dDto.getBarrio());
                dir.setLocalidad(dDto.getLocalidad());
                dir.setProvincia(dDto.getProvincia());
                dir.setCodigoPostal(dDto.getCodigoPostal());
                dir.setTipoDomicilio(dDto.getTipoDomicilio());
                entidad.addDireccion(dir);
            });
        }

        return entidad;
    }
}

