package com.haoyaoge.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.haoyaoge.domain.util.NumericBooleanDeserializer;
import com.haoyaoge.domain.util.NumericBooleanSerializer;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

public class Sku {

    @Field("sku_id")
    private Integer skuId;

    @Field("thumb_url")
    @NotNull
    @Pattern(regexp = "^[a-zA-Z0-9]*$")
    private String thumbUrl;

    @Field("quantity")
    private Integer quantity;

    @Field("limit_quantity")
    private Integer limitQuantity;

    @Field("sold_quantity")
    private Integer soldQuantity;

    @Field("init_quantity")
    private Integer initQuantity;

    @Field("is_onsale")
    @JsonSerialize(using=NumericBooleanSerializer.class)
    @JsonDeserialize(using=NumericBooleanDeserializer.class)
    private Boolean isOnsale;

    @Field("spec")
    private Integer specId;

    @Field("specs")
    private List<SkuSpec> specs = new ArrayList<>();

    public Integer getSkuId() {
        return skuId;
    }

    public void setSkuId(Integer skuId) {
        this.skuId = skuId;
    }

    public String getThumbUrl() {
        return thumbUrl;
    }

    public void setThumbUrl(String thumbUrl) {
        this.thumbUrl = thumbUrl;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getLimitQuantity() {
        return limitQuantity;
    }

    public void setLimitQuantity(Integer limitQuantity) {
        this.limitQuantity = limitQuantity;
    }

    public Integer getSoldQuantity() {
        return soldQuantity;
    }

    public void setSoldQuantity(Integer soldQuantity) {
        this.soldQuantity = soldQuantity;
    }

    public Integer getInitQuantity() {
        return initQuantity;
    }

    public void setInitQuantity(Integer initQuantity) {
        this.initQuantity = initQuantity;
    }

    public Boolean getIsOnsale() {
        return isOnsale;
    }

    public void setIsOnsale(Boolean onsale) {
        isOnsale = onsale;
    }

    @JsonProperty("spec")
    public Integer getSpecId() {
        return specId;
    }

    public void setSpecId(Integer specId) {
        this.specId = specId;
    }

    public List<SkuSpec> getSpecs() {
        return specs;
    }

    public void addSpec(SkuSpec spec) {
        this.specs.add(spec);
    }

    @Override
    public String toString() {
        return "Sku{" +
            "skuId=" + skuId +
            ", thumbUrl='" + thumbUrl + '\'' +
            ", quantity=" + quantity +
            ", limitQuantity=" + limitQuantity +
            ", soldQuantity=" + soldQuantity +
            ", initQuantity=" + initQuantity +
            ", isOnsale=" + isOnsale +
            ", specId=" + specId +
            ", specs=" + specs +
            '}';
    }
}
