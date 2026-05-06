package com.inmob2.backend;

import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.model.entity.PersonaFisica;
import com.inmob2.backend.repository.PersonaFisicaRepository;
import com.inmob2.backend.service.PersonaFisicaService;
import com.inmob2.backend.service.mapper.PersonaMapperUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class PersonaFisicaServiceTest {

    @Mock
    private PersonaFisicaRepository repository;

    @Mock
    private PersonaMapperUtils mapper;

    @InjectMocks
    private PersonaFisicaService service;

    private PersonaFisica personaEntidad;
    private PersonaFisicaDTO personaDTO;

    @BeforeEach
    void setUp() {
        personaEntidad = new PersonaFisica();
        personaEntidad.setId(1L);
        personaEntidad.setNumDocumento("12345678");
        personaEntidad.setPrimerNombre("Juan");
        personaEntidad.setPrimerApellido("Perez");

        personaDTO = new PersonaFisicaDTO();
        personaDTO.setId(1L);
        personaDTO.setNumDocumento("12345678");
        personaDTO.setPrimerNombre("Juan");
        personaDTO.setPrimerApellido("Perez");
        personaDTO.setFechaNacimiento(LocalDate.of(1990, 1, 1));
    }

    @Test
    void testCrearPersonaFisica() {
        when(repository.save(any(PersonaFisica.class))).thenReturn(personaEntidad);
        
        // Simular que el mock no falla al mapear
        PersonaFisicaDTO resultado = service.guardar(personaDTO);

        assertNotNull(resultado);
        verify(repository, times(1)).save(any(PersonaFisica.class));
    }

    @Test
    void testObtenerPersonaPorDni_Exito() {
        when(repository.findByNumDocumento("12345678")).thenReturn(Optional.of(personaEntidad));

        PersonaFisicaDTO resultado = service.obtenerPorDni("12345678");

        assertNotNull(resultado);
        assertEquals("12345678", resultado.getNumDocumento());
        verify(repository, times(1)).findByNumDocumento("12345678");
    }

    @Test
    void testObtenerPersonaPorDni_NoEncontrado() {
        when(repository.findByNumDocumento("99999999")).thenReturn(Optional.empty());

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            service.obtenerPorDni("99999999");
        });

        assertTrue(exception.getMessage().contains("No se encontró la persona con DNI: 99999999"));
    }

    @Test
    void testEliminarPersona() {
        when(repository.existsById(1L)).thenReturn(true);

        service.eliminar(1L);

        verify(repository, times(1)).deleteById(1L);
    }
}
