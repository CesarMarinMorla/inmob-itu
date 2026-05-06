package com.inmob2.backend.model.entity.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Arrays;

public enum TipoDomicilio {
    LEGAL("legal"),
    PARTICULAR("particular"),
    COMERCIAL("comercial");

    private final String jsonValue;

    @JsonValue
    public String getJsonValue() { return jsonValue; }

    @JsonCreator
    public static TipoDomicilio fromJsonValue(String jsonValue) {
        return Arrays.stream(values())
            .filter(e -> e.jsonValue.equals(jsonValue))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Unknown: " + jsonValue));
    }

    TipoDomicilio(String jsonValue) {
        this.jsonValue = jsonValue;
    }
}
