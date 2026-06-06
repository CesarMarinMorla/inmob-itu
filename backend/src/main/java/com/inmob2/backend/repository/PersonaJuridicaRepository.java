package com.inmob2.backend.repository;

import com.inmob2.backend.model.entity.PersonaJuridica;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonaJuridicaRepository extends JpaRepository<PersonaJuridica, Long> {
       Optional<PersonaJuridica> findByCuit(String cuit);

       @Query(value = "SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Inquilino", countQuery = "SELECT COUNT(DISTINCT pj) FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Inquilino")
       Page<PersonaJuridica> findAllWithRolInquilino(Pageable pageable);

       @Query(value = "SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Propietario", countQuery = "SELECT COUNT(DISTINCT pj) FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Propietario")
       Page<PersonaJuridica> findAllWithRolPropietario(Pageable pageable);

       @Query(value = "SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Garante", countQuery = "SELECT COUNT(DISTINCT pj) FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Garante")
       Page<PersonaJuridica> findAllWithRolGarante(Pageable pageable);

       @Query(value = "SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Empleado", countQuery = "SELECT COUNT(DISTINCT pj) FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Empleado")
       Page<PersonaJuridica> findAllWithRolEmpleado(Pageable pageable);

       @Query(value = "SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Administrador", countQuery = "SELECT COUNT(DISTINCT pj) FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Administrador")
       Page<PersonaJuridica> findAllWithRolAdministrador(Pageable pageable);

       // Métodos sin paginación mantenidos para compatibilidad interna
       @Query("SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Inquilino")
       List<PersonaJuridica> findAllWithRolInquilino();

       @Query("SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Propietario")
       List<PersonaJuridica> findAllWithRolPropietario();

       @Query("SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Garante")
       List<PersonaJuridica> findAllWithRolGarante();

       @Query("SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Empleado")
       List<PersonaJuridica> findAllWithRolEmpleado();

       @Query("SELECT DISTINCT pj FROM PersonaJuridica pj JOIN pj.roles r WHERE TYPE(r) = Administrador")
       List<PersonaJuridica> findAllWithRolAdministrador();
}
