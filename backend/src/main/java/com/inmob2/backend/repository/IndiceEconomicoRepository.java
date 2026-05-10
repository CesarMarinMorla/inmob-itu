package com.inmob2.backend.repository;

import com.inmob2.backend.model.entity.IndiceEconomico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IndiceEconomicoRepository extends JpaRepository<IndiceEconomico, Long> {
    Optional<IndiceEconomico> findByTipo(String tipo);
}
