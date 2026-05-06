package com.inmob2.backend.repository.propiedad;

import com.inmob2.backend.model.entity.propiedad.Departamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepartamentoRepository extends JpaRepository<Departamento, Long> {
    Optional<Departamento> findByCodigoRef(String codigoRef);
}
