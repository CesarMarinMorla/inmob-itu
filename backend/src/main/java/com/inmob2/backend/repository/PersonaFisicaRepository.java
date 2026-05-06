package com.inmob2.backend.repository;

import com.inmob2.backend.model.entity.PersonaFisica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonaFisicaRepository extends JpaRepository<PersonaFisica, Long> {
    Optional<PersonaFisica> findByNumDocumento(String numDocumento);

    @Query("SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Inquilino")
    List<PersonaFisica> findAllWithRolInquilino();

    @Query("SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Propietario")
    List<PersonaFisica> findAllWithRolPropietario();

    @Query("SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Garante")
    List<PersonaFisica> findAllWithRolGarante();

    @Query("SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Empleado")
    List<PersonaFisica> findAllWithRolEmpleado();

    @Query("SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Administrador")
    List<PersonaFisica> findAllWithRolAdministrador();
}
