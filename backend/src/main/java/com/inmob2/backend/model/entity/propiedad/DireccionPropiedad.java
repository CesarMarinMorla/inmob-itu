package com.inmob2.backend.model.entity.propiedad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "direccion_propiedad")
@Getter
@Setter
@NoArgsConstructor
public class DireccionPropiedad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "calle_ruta", nullable = false, length = 150)
    private String calleRuta;

    @Column(name = "altura_km", length = 50)
    private String alturaKm;

    @Column(name = "localidad", nullable = false, length = 100)
    private String localidad;

    @Column(name = "provincia", nullable = false, length = 100)
    private String provincia;

    @Column(name = "codigo_postal", length = 20)
    private String codigoPostal;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @OneToOne(mappedBy = "direccion")
    private Propiedad propiedad;
}
