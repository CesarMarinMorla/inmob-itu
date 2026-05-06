package com.inmob2.backend.model.entity.propiedad;

import com.inmob2.backend.model.entity.propiedad.enums.Amenity;
import com.inmob2.backend.model.entity.propiedad.enums.Disposicion;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "departamento")
@Getter
@Setter
@NoArgsConstructor
public class Departamento extends UnidadHabitacional {

    @Column(name = "piso", length = 10)
    private String piso;

    @Column(name = "letra_numero", length = 10)
    private String letraNumero;

    @Column(name = "expensas_monto")
    private Double expensasMonto;

    @Enumerated(EnumType.STRING)
    @Column(name = "disposicion", length = 30)
    private Disposicion disposicion;

    // Colección de amenities (Pileta, Gym, etc.) que se guarda en tabla separada automáticamente
    @ElementCollection(targetClass = Amenity.class, fetch = FetchType.EAGER)
    @CollectionTable(name = "departamento_amenities", joinColumns = @JoinColumn(name = "departamento_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "amenity")
    private List<Amenity> amenities = new ArrayList<>();
}
