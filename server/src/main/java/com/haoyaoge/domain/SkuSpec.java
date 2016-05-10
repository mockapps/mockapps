package com.haoyaoge.domain;

import org.springframework.data.mongodb.core.mapping.Field;

public class SkuSpec{

    @Field("spec_key")
    private String specKey;

    @Field("spec_value")
    private String specValue;

    public SkuSpec() {
        this.specKey = "";
        this.specValue = "";
    }

    public SkuSpec(String specKey, String specValue) {
        this.specKey = specKey;
        this.specValue = specValue;
    }

    public String getSpecKey() {
        return specKey;
    }

    public void setSpecKey(String specKey) {
        this.specKey = specKey;
    }

    public String getSpecValue() {
        return specValue;
    }

    public void setSpecValue(String specValue) {
        this.specValue = specValue;
    }

    @Override
    public String toString() {
        return "SkuSpec{" +
            "spec_key='" + specKey + '\'' +
            ", spec_value='" + specValue + '\'' +
            '}';
    }
}
