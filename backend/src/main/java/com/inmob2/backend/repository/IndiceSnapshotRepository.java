package com.inmob2.backend.repository;

import com.inmob2.backend.model.entity.IndiceSnapshot;
import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IndiceSnapshotRepository extends JpaRepository<IndiceSnapshot, IndiceAjuste> {
}
