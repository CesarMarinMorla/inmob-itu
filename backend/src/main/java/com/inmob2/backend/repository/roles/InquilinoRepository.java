package com.inmob2.backend.repository.roles;

import com.inmob2.backend.model.entity.roles.Inquilino;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InquilinoRepository extends JpaRepository<Inquilino, Long> {}
