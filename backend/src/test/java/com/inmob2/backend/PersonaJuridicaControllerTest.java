package com.inmob2.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inmob2.backend.controller.PersonaJuridicaController;
import com.inmob2.backend.model.dto.PersonaJuridicaDTO;
import com.inmob2.backend.service.PersonaJuridicaService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PersonaJuridicaController.class)
public class PersonaJuridicaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PersonaJuridicaService personaJuridicaService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testObtenerPorCuit_Retorna200() throws Exception {
        PersonaJuridicaDTO mockDto = new PersonaJuridicaDTO();
        mockDto.setCuit("20-77889900-1");
        mockDto.setRazonSocial("Empresa Prueba");

        Mockito.when(personaJuridicaService.obtenerPorCuit("20-77889900-1")).thenReturn(mockDto);

        mockMvc.perform(get("/api/v1/personas-juridicas/cuit/20-77889900-1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.razonSocial").value("Empresa Prueba"))
                .andExpect(jsonPath("$.cuit").value("20-77889900-1"));
    }

    @Test
    public void testCrearPersonaJuridica_RazonSocialVacia_Retorna400() throws Exception {
        PersonaJuridicaDTO invalidDto = new PersonaJuridicaDTO();
        invalidDto.setCuit("20-77889900-1");
        // razonSocial está vacío

        mockMvc.perform(post("/api/v1/personas-juridicas")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDto)))
                .andExpect(status().isBadRequest());
    }
}
