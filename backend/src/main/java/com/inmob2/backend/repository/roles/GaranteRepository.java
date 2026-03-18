package com.inmob2.backend.repository.roles;

import com.inmob2.backend.model.entity.roles.Garante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GaranteRepository extends JpaRepository<Garante, Long> {}
