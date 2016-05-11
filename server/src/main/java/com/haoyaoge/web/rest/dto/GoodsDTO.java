package com.haoyaoge.web.rest.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.haoyaoge.domain.util.NumericBooleanDeserializer;
import com.haoyaoge.domain.util.NumericBooleanSerializer;

import java.util.ArrayList;
import java.util.List;


public class GoodsDTO {

    private String goodsId;

    private String goodsName;

    private String imageUrl;

    @JsonSerialize(using=NumericBooleanSerializer.class)
    @JsonDeserialize(using=NumericBooleanDeserializer.class)
    private Boolean isApp;

    private Integer marketPrice;

    private List<String> listDesc = new ArrayList<>();

    private SimpleGroup group = new SimpleGroup();

    private Integer mallId;

    public String getGoodsId() {
        return goodsId;
    }

    public GoodsDTO setGoodsId(String id) {
        this.goodsId = id;
        return this;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public GoodsDTO setGoodsName(String goodsName) {
        this.goodsName = goodsName;
        return this;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public GoodsDTO setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }

    public Boolean getApp() {
        return isApp;
    }

    public GoodsDTO setApp(Boolean app) {
        isApp = app;
        return this;
    }

    public Integer getMarketPrice() {
        return marketPrice;
    }

    public GoodsDTO setMarketPrice(Integer marketPrice) {
        this.marketPrice = marketPrice;
        return this;
    }

    public List<String> getListDesc() {
        return listDesc;
    }

    public GoodsDTO addDesc(String desc) {
        this.listDesc.add(desc);
        return this;
    }

    public SimpleGroup getGroup() {
        return group;
    }

    public GoodsDTO setGroup(Integer price, Integer customerNum) {
        this.group.setPrice(price).setCustomerNum(customerNum);
        return this;
    }

    public Integer getMallId() {
        return mallId;
    }

    public GoodsDTO setMallId(Integer mallId) {
        this.mallId = mallId;
        return this;
    }

    public static class SimpleGroup{
        private Integer price;
        private Integer customerNum;

        public Integer getPrice() {
            return price;
        }

        public SimpleGroup setPrice(Integer price) {
            this.price = price;
            return this;
        }

        public Integer getCustomerNum() {
            return customerNum;
        }

        public SimpleGroup setCustomerNum(Integer customerNum) {
            this.customerNum = customerNum;
            return this;
        }
    }
}
