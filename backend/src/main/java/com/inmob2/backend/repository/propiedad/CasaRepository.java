package com.inmob2.backend.repository.propiedad;

import com.inmob2.backend.model.entity.propiedad.Casa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CasaRepository extends JpaRepository<Casa, Long> {
    Optional<Casa> findByCodigoRef(String codigoRef);
}
