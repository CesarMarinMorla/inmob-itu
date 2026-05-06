package com.inmob2.backend.model.entity.propiedad.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Arrays;

public enum EstadoPropiedad {
    DISPONIBLE("disponible"),
    ALQUILADO("alquilado"),
    RESERVADO("reservado"),
    FUERA_DE_SERVICIO("fuera_de_servicio");

    private final String jsonValue;

    @JsonValue
    public String getJsonValue() { return jsonValue; }

    @JsonCreator
    public static EstadoPropiedad fromJsonValue(String jsonValue) {
        return Arrays.stream(values())
            .filter(e -> e.jsonValue.equals(jsonValue))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Unknown: " + jsonValue));
    }

    EstadoPropiedad(String jsonValue) {
        this.jsonValue = jsonValue;
    }
}
