package com.inmob2.backend.repository.contrato;

import com.inmob2.backend.model.entity.contrato.Contrato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContratoRepository extends JpaRepository<Contrato, Long> {
    Optional<Contrato> findByContratoNumero(String contratoNumero);
}
