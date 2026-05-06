package com.inmob2.backend;

import com.inmob2.backend.model.entity.PersonaJuridica;
import com.inmob2.backend.repository.PersonaJuridicaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class PersonaJuridicaRepositoryTest {

    @Autowired
    private PersonaJuridicaRepository personaJuridicaRepository;

    @Test
    public void testFindByCuit() {
        // 1. Arrange: Preparar y persistir los datos reales en H2
        PersonaJuridica empresa = new PersonaJuridica();
        empresa.setCuit("20-77889900-1");
        empresa.setRazonSocial("Empresa de Prueba S.A.");
        personaJuridicaRepository.save(empresa);

        // 2. Act: Ejecutar el fragmento de repositorio a testear
        Optional<PersonaJuridica> resultado = personaJuridicaRepository.findByCuit("20-77889900-1");

        // 3. Assert: Validar la integridad
        assertTrue(resultado.isPresent(), "La empresa debe encontrarse en BD por su CUIT");
        assertEquals("Empresa de Prueba S.A.", resultado.get().getRazonSocial(), "La razón social debe coincidir con la BD");
    }
}
