package com.inmob2.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inmob2.backend.controller.contrato.ContratoController;
import com.inmob2.backend.model.dto.contrato.ContratoDTO;
import com.inmob2.backend.service.contrato.ContratoService;
import com.inmob2.backend.config.TestSecurityConfig;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ContratoController.class)
@Import(TestSecurityConfig.class)
public class ContratoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContratoService contratoService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testObtenerPorId_Retorna200() throws Exception {
        ContratoDTO mockDto = new ContratoDTO();
        mockDto.setId(1L);
        mockDto.setContratoNumero("C-001");

        Mockito.when(contratoService.obtenerPorId(1L)).thenReturn(mockDto);

        mockMvc.perform(get("/api/v1/contratos/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.contratoNumero").value("C-001"));
    }

    @Test
    public void testCrearContrato_NumeroVacio_Retorna400() throws Exception {
        ContratoDTO invalidDto = new ContratoDTO();
        // contratoNumero está vacío

        mockMvc.perform(post("/api/v1/contratos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDto)))
                .andExpect(status().isBadRequest());
    }
}
