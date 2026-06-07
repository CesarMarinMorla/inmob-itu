package com.inmob2.backend.repository;

import com.inmob2.backend.model.entity.PersonaFisica;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonaFisicaRepository extends JpaRepository<PersonaFisica, Long> {
       Optional<PersonaFisica> findByNumDocumento(String numDocumento);

       @Query(value = "SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Inquilino", countQuery = "SELECT COUNT(DISTINCT pf) FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Inquilino")
       Page<PersonaFisica> findAllWithRolInquilino(Pageable pageable);

       @Query(value = "SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Propietario", countQuery = "SELECT COUNT(DISTINCT pf) FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Propietario")
       Page<PersonaFisica> findAllWithRolPropietario(Pageable pageable);

       @Query(value = "SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Garante", countQuery = "SELECT COUNT(DISTINCT pf) FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Garante")
       Page<PersonaFisica> findAllWithRolGarante(Pageable pageable);

       @Query(value = "SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Empleado", countQuery = "SELECT COUNT(DISTINCT pf) FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Empleado")
       Page<PersonaFisica> findAllWithRolEmpleado(Pageable pageable);

       @Query(value = "SELECT DISTINCT pf FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Administrador", countQuery = "SELECT COUNT(DISTINCT pf) FROM PersonaFisica pf JOIN pf.roles r WHERE TYPE(r) = Administrador")
       Page<PersonaFisica> findAllWithRolAdministrador(Pageable pageable);

       // Métodos sin paginación mantenidos para compatibilidad interna
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
