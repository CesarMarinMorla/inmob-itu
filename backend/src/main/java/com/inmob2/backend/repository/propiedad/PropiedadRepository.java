package com.inmob2.backend.repository.propiedad;

import com.inmob2.backend.model.entity.propiedad.Propiedad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropiedadRepository extends JpaRepository<Propiedad, Long> {
}
