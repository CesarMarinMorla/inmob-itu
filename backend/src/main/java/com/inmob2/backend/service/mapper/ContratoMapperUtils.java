package com.inmob2.backend.service.mapper;

import com.inmob2.backend.model.dto.contrato.ContratoDTO;
import com.inmob2.backend.model.entity.contrato.Contrato;
import com.inmob2.backend.model.entity.roles.Rol;

import java.util.stream.Collectors;

public class ContratoMapperUtils {

    public static void mapToEntity(ContratoDTO dto, Contrato entidad) {
        entidad.setContratoNumero(dto.getContratoNumero());
        entidad.setFechaFirma(dto.getFechaFirma());
        entidad.setFechaInicio(dto.getFechaInicio());
        entidad.setFechaFinal(dto.getFechaFinal());
        entidad.setContratoEstado(dto.getContratoEstado());
        entidad.setMontoBase(dto.getMontoBase());
        entidad.setTipoMoneda(dto.getTipoMoneda());
        entidad.setAplicaProdCarne(dto.getAplicaProdCarne());
        entidad.setCantidadCarne(dto.getCantidadCarne());
        entidad.setDiaVencimientoPago(dto.getDiaVencimientoPago());
        entidad.setPorcentajeComision(dto.getPorcentajeComision());
        entidad.setMontoDeposito(dto.getMontoDeposito());
        entidad.setMonedaDeposito(dto.getMonedaDeposito());
        entidad.setObservacionesGarantia(dto.getObservacionesGarantia());
        entidad.setIndiceAjuste(dto.getIndiceAjuste());
        entidad.setFrecuenciaAjuste(dto.getFrecuenciaAjuste());
        entidad.setMesProximoAjuste(dto.getMesProximoAjuste());
        // Relaciones (Propiedad y Roles) son manejadas desde el Servicio directamente,
        // porque requieren buscar en la base de datos a través de los Repositorios.
    }

    public static void mapToDto(Contrato entidad, ContratoDTO dto) {
        dto.setId(entidad.getId());
        dto.setContratoNumero(entidad.getContratoNumero());
        dto.setFechaFirma(entidad.getFechaFirma());
        dto.setFechaInicio(entidad.getFechaInicio());
        dto.setFechaFinal(entidad.getFechaFinal());
        dto.setContratoEstado(entidad.getContratoEstado());
        dto.setMontoBase(entidad.getMontoBase());
        dto.setTipoMoneda(entidad.getTipoMoneda());
        dto.setAplicaProdCarne(entidad.getAplicaProdCarne());
        dto.setCantidadCarne(entidad.getCantidadCarne());
        dto.setDiaVencimientoPago(entidad.getDiaVencimientoPago());
        dto.setPorcentajeComision(entidad.getPorcentajeComision());
        dto.setMontoDeposito(entidad.getMontoDeposito());
        dto.setMonedaDeposito(entidad.getMonedaDeposito());
        dto.setObservacionesGarantia(entidad.getObservacionesGarantia());
        dto.setIndiceAjuste(entidad.getIndiceAjuste());
        dto.setFrecuenciaAjuste(entidad.getFrecuenciaAjuste());
        dto.setMesProximoAjuste(entidad.getMesProximoAjuste());

        // Mapeo de IDs de relaciones
        if (entidad.getPropiedadAlquilada() != null) {
            dto.setPropiedadAlquiladaId(entidad.getPropiedadAlquilada().getId());
        }
        
        if (entidad.getPropietarios() != null) {
            dto.setPropietariosIds(entidad.getPropietarios().stream()
                    .map(Rol::getId).collect(Collectors.toList()));
        }

        if (entidad.getInquilinos() != null) {
            dto.setInquilinosIds(entidad.getInquilinos().stream()
                    .map(Rol::getId).collect(Collectors.toList()));
        }

        if (entidad.getGarantes() != null) {
            dto.setGarantesIds(entidad.getGarantes().stream()
                    .map(Rol::getId).collect(Collectors.toList()));
        }
    }
}
