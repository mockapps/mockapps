package com.haoyaoge.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.haoyaoge.domain.util.NumericBooleanDeserializer;
import com.haoyaoge.domain.util.NumericBooleanSerializer;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotNull;

public class Group {
    @Field("id")
    private Integer id;

    @NotNull
    @Field("price")
    private Integer price;

    @NotNull
    @Field("customer_num")
    private Integer customerNum;

    @Field("start_time")
    private Integer startTime;

    @Field("end_time")
    private Integer endTime;

    @Field("buy_limit")
    private Integer buyLimit;

    @Field("order_limit")
    private Integer orderLimit;

    @NotNull
    @Field("is_open")
    @JsonSerialize(using=NumericBooleanSerializer.class)
    @JsonDeserialize(using=NumericBooleanDeserializer.class)
    private Boolean isOpen;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getCustomerNum() {
        return customerNum;
    }

    public void setCustomerNum(Integer customerNum) {
        this.customerNum = customerNum;
    }

    public Integer getStartTime() {
        return startTime;
    }

    public void setStartTime(Integer startTime) {
        this.startTime = startTime;
    }

    public Integer getEndTime() {
        return endTime;
    }

    public void setEndTime(Integer endTime) {
        this.endTime = endTime;
    }

    public Integer getBuyLimit() {
        return buyLimit;
    }

    public void setBuyLimit(Integer buyLimit) {
        this.buyLimit = buyLimit;
    }

    public Integer getOrderLimit() {
        return orderLimit;
    }

    public void setOrderLimit(Integer orderLimit) {
        this.orderLimit = orderLimit;
    }

    public Boolean getIsOpen() {
        return isOpen;
    }

    public void setIsOpen(Boolean open) {
        isOpen = open;
    }

}
