package com.inmob2.backend.model.entity.contrato;

import com.inmob2.backend.model.entity.enums.EstadoContrato;
import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import com.inmob2.backend.model.entity.enums.TipoMoneda;
import com.inmob2.backend.model.entity.propiedad.Propiedad;
import com.inmob2.backend.model.entity.roles.Garante;
import com.inmob2.backend.model.entity.roles.Inquilino;
import com.inmob2.backend.model.entity.roles.Propietario;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "contrato")
@Getter
@Setter
@NoArgsConstructor
public class Contrato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "contrato_numero", unique = true, nullable = false, length = 50)
    private String contratoNumero;

    @Column(name = "fecha_firma", nullable = false)
    private LocalDate fechaFirma;

    @Column(name = "fecha_inicio", nullable = false)
    private LocalDate fechaInicio;

    @Column(name = "fecha_final", nullable = false)
    private LocalDate fechaFinal;

    @Enumerated(EnumType.STRING)
    @Column(name = "contrato_estado", nullable = false, length = 30)
    private EstadoContrato contratoEstado;

    @Column(name = "monto_base", nullable = false)
    private Double montoBase;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_moneda", nullable = false, length = 10)
    private TipoMoneda tipoMoneda;

    @Column(name = "aplica_prod_carne")
    private Boolean aplicaProdCarne;

    @Column(name = "cantidad_carne")
    private Integer cantidadCarne;

    @Column(name = "dia_vencimiento_pago")
    private Integer diaVencimientoPago;

    @Column(name = "porcentaje_comision")
    private Double porcentajeComision;

    @Column(name = "monto_deposito")
    private Double montoDeposito;

    @Enumerated(EnumType.STRING)
    @Column(name = "moneda_deposito", length = 10)
    private TipoMoneda monedaDeposito;

    @Column(name = "observaciones_garantia", length = 1000)
    private String observacionesGarantia;

    @Enumerated(EnumType.STRING)
    @Column(name = "indice_ajuste", length = 10)
    private IndiceAjuste indiceAjuste;

    @Column(name = "frecuencia_ajuste")
    private Integer frecuenciaAjuste;

    @Column(name = "mes_proximo_ajuste")
    private LocalDate mesProximoAjuste;

    // --- Relaciones ---

    @ManyToMany
    @JoinTable(
            name = "contrato_propietario",
            joinColumns = @JoinColumn(name = "contrato_id"),
            inverseJoinColumns = @JoinColumn(name = "propietario_id")
    )
    private List<Propietario> propietarios = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "contrato_inquilino",
            joinColumns = @JoinColumn(name = "contrato_id"),
            inverseJoinColumns = @JoinColumn(name = "inquilino_id")
    )
    private List<Inquilino> inquilinos = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "contrato_garante",
            joinColumns = @JoinColumn(name = "contrato_id"),
            inverseJoinColumns = @JoinColumn(name = "garante_id")
    )
    private List<Garante> garantes = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "propiedad_alquilada_id", nullable = false)
    private Propiedad propiedadAlquilada;

    // --- Helpers ---

    public void addPropietario(Propietario propietario) {
        propietarios.add(propietario);
    }

    public void removePropietario(Propietario propietario) {
        propietarios.remove(propietario);
    }

    public void addInquilino(Inquilino inquilino) {
        inquilinos.add(inquilino);
    }

    public void removeInquilino(Inquilino inquilino) {
        inquilinos.remove(inquilino);
    }

    public void addGarante(Garante garante) {
        garantes.add(garante);
    }

    public void removeGarante(Garante garante) {
        garantes.remove(garante);
    }
}
