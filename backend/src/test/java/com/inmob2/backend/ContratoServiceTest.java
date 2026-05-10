package com.inmob2.backend;

import com.inmob2.backend.model.dto.contrato.ContratoDTO;
import com.inmob2.backend.model.entity.contrato.Contrato;
import com.inmob2.backend.model.entity.propiedad.Casa;
import com.inmob2.backend.model.entity.propiedad.Propiedad;
import com.inmob2.backend.model.entity.roles.Propietario;
import com.inmob2.backend.repository.contrato.ContratoRepository;
import com.inmob2.backend.repository.propiedad.PropiedadRepository;
import com.inmob2.backend.repository.roles.PropietarioRepository;
import com.inmob2.backend.repository.roles.InquilinoRepository;
import com.inmob2.backend.repository.roles.GaranteRepository;
import com.inmob2.backend.service.contrato.ContratoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ContratoServiceTest {

    @Mock
    private ContratoRepository contratoRepository;
    @Mock
    private PropiedadRepository propiedadRepository;
    @Mock
    private PropietarioRepository propietarioRepository;
    @Mock
    private InquilinoRepository inquilinoRepository;
    @Mock
    private GaranteRepository garanteRepository;

    @InjectMocks
    private ContratoService service;

    private ContratoDTO contratoDTO;
    private Propiedad propiedad;
    private Propietario propietario;

    @BeforeEach
    void setUp() {
        contratoDTO = new ContratoDTO();
        contratoDTO.setPropiedadAlquiladaId(1L);
        contratoDTO.setPropietariosIds(Collections.singletonList(1L));
        contratoDTO.setContratoNumero("C-001");

        propiedad = new Casa();
        propiedad.setId(1L);

        propietario = new Propietario();
        propietario.setId(1L);
    }

    @Test
    void testGuardarContrato_Exito() {
        // Arrange
        when(propiedadRepository.findById(1L)).thenReturn(Optional.of(propiedad));
        when(propietarioRepository.findAllById(any())).thenReturn(Collections.singletonList(propietario));
        when(contratoRepository.save(any(Contrato.class))).thenAnswer(i -> i.getArguments()[0]);

        // Act
        ContratoDTO resultado = service.guardar(contratoDTO);

        // Assert
        assertNotNull(resultado);
        verify(contratoRepository, times(1)).save(any(Contrato.class));
    }

    @Test
    void testGuardarContrato_PropiedadNoExiste_LanzaExcepcion() {
        // Arrange
        when(propiedadRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> service.guardar(contratoDTO));
        verify(contratoRepository, never()).save(any());
    }

    @Test
    void testEliminarContrato_NoEncontrado_LanzaExcepcion() {
        // Arrange
        when(contratoRepository.existsById(1L)).thenReturn(false);

        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> service.eliminar(1L));
    }
}
