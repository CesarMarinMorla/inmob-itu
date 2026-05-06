package com.inmob2.backend.repository.roles;

import com.inmob2.backend.model.entity.roles.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {}
