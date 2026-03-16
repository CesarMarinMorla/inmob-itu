package com.inmob2.backend.repository;

import com.inmob2.backend.model.entity.PersonaFisica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonaFisicaRepository extends JpaRepository<PersonaFisica, Long> {
    Optional<PersonaFisica> findByNumDocumento(String numDocumento);
}
