package com.inmob2.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inmob2.backend.controller.PersonaFisicaController;
import com.inmob2.backend.model.dto.PersonaFisicaDTO;
import com.inmob2.backend.service.PersonaFisicaService;
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

@WebMvcTest(PersonaFisicaController.class)
public class PersonaFisicaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PersonaFisicaService personaFisicaService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testObtenerPorDni_Retorna200() throws Exception {
        PersonaFisicaDTO mockDto = new PersonaFisicaDTO();
        mockDto.setNumDocumento("11223344");
        mockDto.setPrimerNombre("Ana");

        Mockito.when(personaFisicaService.obtenerPorDni("11223344")).thenReturn(mockDto);

        mockMvc.perform(get("/api/v1/personas-fisicas/11223344")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.primerNombre").value("Ana"))
                .andExpect(jsonPath("$.numDocumento").value("11223344"));
    }

    @Test
    public void testCrearPersonaFisica_DniVacio_Retorna400() throws Exception {
        // Enviar un DTO inválido (DNI nulo o vacío) para probar @Valid
        PersonaFisicaDTO invalidDto = new PersonaFisicaDTO();
        invalidDto.setPrimerNombre("Juan");
        // numDocumento está vacío, lo cual viola la anotación @NotBlank en PersonaDTO

        mockMvc.perform(post("/api/v1/personas-fisicas")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDto)))
                .andExpect(status().isBadRequest()); // 400 Bad Request
    }
}
