package com.inmob2.backend.model.entity.propiedad;

import com.inmob2.backend.model.entity.propiedad.enums.EstadoPropiedad;
import com.inmob2.backend.model.entity.roles.Propietario;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "propiedad")
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@NoArgsConstructor
public abstract class Propiedad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "codigo_referencia", nullable = false, unique = true, length = 50)
    private String codigoRef;

    @Column(name = "codigo_catastral", unique = true, length = 100)
    private String codigoCatastral;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false, length = 30)
    private EstadoPropiedad estado;

    @Column(name = "superficie_total")
    private Double superficieTotal;

    @Column(name = "superficie_cubierta")
    private Double superficieCubierta;

    // Relación OneToOne Mapeada a DireccionPropiedad
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "direccion_id", referencedColumnName = "id")
    private DireccionPropiedad direccion;

    // Relación ManyToMany con Propietario (Una Propiedad puede tener >1 dueño, Un dueño >1 Propiedad)
    @ManyToMany
    @JoinTable(
            name = "propiedad_propietario",
            joinColumns = @JoinColumn(name = "propiedad_id"),
            inverseJoinColumns = @JoinColumn(name = "propietario_id")
    )
    private List<Propietario> dueniosLista = new ArrayList<>();

    // TODO: Implementar cuando se desarrolle el módulo de Contratos
    // @OneToMany(mappedBy = "propiedad", cascade = CascadeType.ALL, orphanRemoval = true)
    // private List<Contrato> historialContratos = new ArrayList<>();

    // --- Helper Methods ---
    public void setDireccion(DireccionPropiedad direccion) {
        this.direccion = direccion;
        if (direccion != null) {
            direccion.setPropiedad(this);
        }
    }

    public void addPropietario(Propietario propietario) {
        dueniosLista.add(propietario);
        propietario.getPropiedades().add(this);
    }

    public void removePropietario(Propietario propietario) {
        dueniosLista.remove(propietario);
        propietario.getPropiedades().remove(this);
    }
}
