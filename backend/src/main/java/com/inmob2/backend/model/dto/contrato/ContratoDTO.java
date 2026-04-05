package com.inmob2.backend.model.dto.contrato;

import com.inmob2.backend.model.entity.enums.EstadoContrato;
import com.inmob2.backend.model.entity.enums.IndiceAjuste;
import com.inmob2.backend.model.entity.enums.TipoMoneda;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class ContratoDTO {

    private Long id;

    @NotBlank(message = "El número de contrato es obligatorio")
    private String contratoNumero;

    @NotNull(message = "La fecha de firma es obligatoria")
    private LocalDate fechaFirma;

    @NotNull(message = "La fecha de inicio es obligatoria")
    private LocalDate fechaInicio;

    @NotNull(message = "La fecha final es obligatoria")
    private LocalDate fechaFinal;

    @NotNull(message = "El estado del contrato es obligatorio")
    private EstadoContrato contratoEstado;

    @NotNull(message = "El monto base es obligatorio")
    private Double montoBase;

    @NotNull(message = "El tipo de moneda es obligatorio")
    private TipoMoneda tipoMoneda;

    private Boolean aplicaProdCarne;
    private Integer cantidadCarne;
    private Integer diaVencimientoPago;
    private Double porcentajeComision;
    private Double montoDeposito;
    private TipoMoneda monedaDeposito;
    private String observacionesGarantia;
    private IndiceAjuste indiceAjuste;
    private Integer frecuenciaAjuste;
    private LocalDate mesProximoAjuste;

    // Relaciones (IDs)
    @NotNull(message = "La propiedad alquilada es obligatoria")
    private Long propiedadAlquiladaId;

    @NotNull(message = "Debe haber al menos un propietario")
    private List<Long> propietariosIds;

    @NotNull(message = "Debe haber al menos un inquilino")
    private List<Long> inquilinosIds;

    private List<Long> garantesIds;
}
