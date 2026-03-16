package com.inmob2.backend.service.mapper;

import com.inmob2.backend.model.dto.DireccionPersonaDTO;
import com.inmob2.backend.model.dto.MailPersonaDTO;
import com.inmob2.backend.model.dto.PersonaDTO;
import com.inmob2.backend.model.dto.TelefonoPersonaDTO;
import com.inmob2.backend.model.entity.DireccionPersona;
import com.inmob2.backend.model.entity.MailPersona;
import com.inmob2.backend.model.entity.Persona;
import com.inmob2.backend.model.entity.TelefonoPersona;

import java.util.stream.Collectors;

public class PersonaMapperUtils {

    // --- Mapeo Entidad -> DTO (Propiedades Base y Colecciones) ---
    public static void mapearListasHaciaDto(Persona entidad, PersonaDTO dto) {
        dto.setId(entidad.getId());

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
    }

    // --- Mapeo DTO -> Entidad (Colecciones con Helper Methods) ---
    public static void mapearListasHaciaEntidad(PersonaDTO dto, Persona entidad) {
        if (dto.getMails() != null) {
            dto.getMails().forEach(mDto -> {
                MailPersona mail = new MailPersona();
                mail.setEmail(mDto.getEmail());
                mail.setTipo(mDto.getTipo());
                mail.setEsPrincipal(mDto.getEsPrincipal() != null ? mDto.getEsPrincipal() : false);
                entidad.addMail(mail); // Helper Method que establece relación bidireccional
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
    }
}
