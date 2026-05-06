package com.inmob2.backend.repository.propiedad;

import com.inmob2.backend.model.entity.propiedad.Terreno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TerrenoRepository extends JpaRepository<Terreno, Long> {
    Optional<Terreno> findByCodigoRef(String codigoRef);
}
