package com.inmob2.backend.model.entity.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Arrays;

public enum TipoTelefono {
    FIJO("fijo"),
    CELULAR("celular"),
    TRABAJO("trabajo");

    private final String jsonValue;

    @JsonValue
    public String getJsonValue() { return jsonValue; }

    @JsonCreator
    public static TipoTelefono fromJsonValue(String jsonValue) {
        return Arrays.stream(values())
            .filter(e -> e.jsonValue.equals(jsonValue))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Unknown: " + jsonValue));
    }

    TipoTelefono(String jsonValue) {
        this.jsonValue = jsonValue;
    }
}
