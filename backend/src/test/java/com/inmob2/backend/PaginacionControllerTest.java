package com.inmob2.backend;

import com.inmob2.backend.config.TestSecurityConfig;
import com.inmob2.backend.controller.CasaController;
import com.inmob2.backend.controller.DepartamentoController;
import com.inmob2.backend.controller.PersonaFisicaController;
import com.inmob2.backend.controller.PersonaJuridicaController;
import com.inmob2.backend.controller.TerrenoController;
import com.inmob2.backend.controller.contrato.ContratoController;
import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.model.dto.PersonaJuridicaDTO;
import com.inmob2.backend.model.dto.contrato.ContratoDTO;
import com.inmob2.backend.model.dto.propiedad.CasaDTO;
import com.inmob2.backend.model.dto.propiedad.DepartamentoDTO;
import com.inmob2.backend.model.dto.propiedad.TerrenoDTO;
import com.inmob2.backend.service.CasaService;
import com.inmob2.backend.service.DepartamentoService;
import com.inmob2.backend.service.PersonaFisicaService;
import com.inmob2.backend.service.PersonaJuridicaService;
import com.inmob2.backend.service.TerrenoService;
import com.inmob2.backend.service.contrato.ContratoService;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest({
    CasaController.class,
    ContratoController.class,
    DepartamentoController.class,
    PersonaFisicaController.class,
    PersonaJuridicaController.class,
    TerrenoController.class
})
@Import(TestSecurityConfig.class)
public class PaginacionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean private CasaService casaService;
    @MockBean private ContratoService contratoService;
    @MockBean private DepartamentoService departamentoService;
    @MockBean private PersonaFisicaService personaFisicaService;
    @MockBean private PersonaJuridicaService personaJuridicaService;
    @MockBean private TerrenoService terrenoService;

    // --- Casas ---

    @Test
    void casas_paginacionPorDefecto_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new CasaDTO()), PageRequest.of(0, 20), 1);
        when(casaService.obtenerTodas(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/casas").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.paginaActual").value(0))
                .andExpect(jsonPath("$.tamanioPagina").value(20))
                .andExpect(jsonPath("$.totalElementos").value(1))
                .andExpect(jsonPath("$.totalPaginas").value(1))
                .andExpect(jsonPath("$.hayPaginaSiguiente").value(false))
                .andExpect(jsonPath("$.hayPaginaAnterior").value(false));
    }

    @Test
    void casas_paginacionPersonalizada_retorna200() throws Exception {
        var page = new PageImpl<>(List.of(new CasaDTO()), PageRequest.of(1, 5), 10);
        when(casaService.obtenerTodas(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/casas?page=1&size=5").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.paginaActual").value(1))
                .andExpect(jsonPath("$.tamanioPagina").value(5))
                .andExpect(jsonPath("$.totalElementos").value(10))
                .andExpect(jsonPath("$.hayPaginaSiguiente").value(false))
                .andExpect(jsonPath("$.hayPaginaAnterior").value(true));
    }

    // --- Contratos ---

    @Test
    void contratos_paginacionPorDefecto_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new ContratoDTO()), PageRequest.of(0, 20), 1);
        when(contratoService.obtenerTodos(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/contratos").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.paginaActual").value(0))
                .andExpect(jsonPath("$.totalElementos").value(1));
    }

    // --- Departamentos ---

    @Test
    void departamentos_paginacionPorDefecto_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new DepartamentoDTO()), PageRequest.of(0, 20), 1);
        when(departamentoService.obtenerTodos(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/departamentos").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.paginaActual").value(0))
                .andExpect(jsonPath("$.totalElementos").value(1));
    }

    // --- Personas Físicas ---

    @Test
    void personasFisicas_sinFiltro_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new PersonaFisicaDTO()), PageRequest.of(0, 20), 1);
        when(personaFisicaService.obtenerTodas(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/personas-fisicas").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.paginaActual").value(0))
                .andExpect(jsonPath("$.totalElementos").value(1));
    }

    @Test
    void personasFisicas_conFiltroRol_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new PersonaFisicaDTO()), PageRequest.of(0, 20), 1);
        when(personaFisicaService.obtenerPorRol(ArgumentMatchers.eq("inquilino"), ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/personas-fisicas?rol=inquilino").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElementos").value(1));
    }

    // --- Personas Jurídicas ---

    @Test
    void personasJuridicas_sinFiltro_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new PersonaJuridicaDTO()), PageRequest.of(0, 20), 1);
        when(personaJuridicaService.obtenerTodas(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/personas-juridicas").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.paginaActual").value(0))
                .andExpect(jsonPath("$.totalElementos").value(1));
    }

    @Test
    void personasJuridicas_conFiltroRol_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new PersonaJuridicaDTO()), PageRequest.of(0, 20), 1);
        when(personaJuridicaService.obtenerPorRol(ArgumentMatchers.eq("propietario"), ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/personas-juridicas?rol=propietario").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElementos").value(1));
    }

    // --- Terrenos ---

    @Test
    void terrenos_paginacionPorDefecto_retorna200ConMetadatos() throws Exception {
        var page = new PageImpl<>(List.of(new TerrenoDTO()), PageRequest.of(0, 20), 1);
        when(terrenoService.obtenerTodos(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/terrenos").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.paginaActual").value(0))
                .andExpect(jsonPath("$.totalElementos").value(1));
    }

    @Test
    void terrenos_paginaVacia_retorna200SinData() throws Exception {
        var page = new PageImpl<TerrenoDTO>(List.of(), PageRequest.of(5, 20), 0);
        when(terrenoService.obtenerTodos(ArgumentMatchers.any())).thenReturn(page);

        mockMvc.perform(get("/api/v1/terrenos?page=5&size=20").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElementos").value(0))
                .andExpect(jsonPath("$.hayPaginaSiguiente").value(false));
    }
}
