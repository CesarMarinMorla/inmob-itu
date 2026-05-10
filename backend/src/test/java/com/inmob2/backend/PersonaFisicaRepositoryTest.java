package com.inmob2.backend;

import com.inmob2.backend.model.entity.PersonaFisica;
import com.inmob2.backend.repository.PersonaFisicaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class PersonaFisicaRepositoryTest {

    @Autowired
    private PersonaFisicaRepository personaFisicaRepository;

    @Test
    public void testFindByNumDocumento() {
        // 1. Arrange: Preparar y persistir los datos reales en H2
        PersonaFisica persona = new PersonaFisica();
        persona.setNumDocumento("77889900");
        persona.setPrimerNombre("Carlos");
        persona.setPrimerApellido("Prueba");
        persona.setTipoDocumento("DNI");
        personaFisicaRepository.save(persona);

        // 2. Act: Ejecutar el fragmento de repositorio a testear
        Optional<PersonaFisica> resultado = personaFisicaRepository.findByNumDocumento("77889900");

        // 3. Assert: Validar la integridad
        assertTrue(resultado.isPresent(), "La persona debe encontrarse en BD por su DNI");
        assertEquals("Carlos", resultado.get().getPrimerNombre(), "El nombre debe coincidir con la BD");
    }
}
