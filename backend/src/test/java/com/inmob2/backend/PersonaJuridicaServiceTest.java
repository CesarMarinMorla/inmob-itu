package com.inmob2.backend;

import com.inmob2.backend.model.dto.PersonaJuridicaDTO;
import com.inmob2.backend.model.entity.PersonaJuridica;
import com.inmob2.backend.repository.PersonaJuridicaRepository;
import com.inmob2.backend.service.PersonaJuridicaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class PersonaJuridicaServiceTest {

    @Mock
    private PersonaJuridicaRepository repository;

    @InjectMocks
    private PersonaJuridicaService service;

    private PersonaJuridica personaEntidad;
    private PersonaJuridicaDTO personaDTO;

    @BeforeEach
    void setUp() {
        personaEntidad = new PersonaJuridica();
        personaEntidad.setId(1L);
        personaEntidad.setCuit("20-77889900-1");
        personaEntidad.setRazonSocial("Empresa Prueba");

        personaDTO = new PersonaJuridicaDTO();
        personaDTO.setId(1L);
        personaDTO.setCuit("20-77889900-1");
        personaDTO.setRazonSocial("Empresa Prueba");
    }

    @Test
    void testCrearPersonaJuridica() {
        when(repository.save(any(PersonaJuridica.class))).thenReturn(personaEntidad);
        
        PersonaJuridicaDTO resultado = service.guardar(personaDTO);

        assertNotNull(resultado);
        assertEquals("20-77889900-1", resultado.getCuit());
        verify(repository, times(1)).save(any(PersonaJuridica.class));
    }

    @Test
    void testObtenerPersonaPorCuit_Exito() {
        when(repository.findByCuit("20-77889900-1")).thenReturn(Optional.of(personaEntidad));

        PersonaJuridicaDTO resultado = service.obtenerPorCuit("20-77889900-1");

        assertNotNull(resultado);
        verify(repository, times(1)).findByCuit("20-77889900-1");
    }

    @Test
    void testEliminarPersonaJuridica_Exito() {
        when(repository.existsById(1L)).thenReturn(true);

        service.eliminar(1L);

        verify(repository, times(1)).deleteById(1L);
    }
}
