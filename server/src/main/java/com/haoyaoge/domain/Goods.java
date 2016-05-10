package com.haoyaoge.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Document(collection = "goods")
public class Goods implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("subject_id")
    private Integer subjectId;

    @Field("cat_id")
    private Integer catId;

    @Field("mall_id")
    private Integer mallId;

    @NotNull
    @Field("goods_name")
    private String goodsName;

    @Field("is_app")
    private Boolean isApp;

    @Field("event_type")
    private Integer eventType;

    @NotNull
    @Field("goods_desc")
    private String goodsDesc;

    @Field("market_price")
    private Integer marketPrice;

    @Field("is_onsale")
    private Boolean isOnsale;

    @NotNull
    @Pattern(regexp = "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]")
    @Field("thumb_url")
    private String thumbUrl;

    @Field("allowed_region")
    private String allowedRegion;

    @Field("country")
    private String country;

    @Field("warehouse")
    private String warehouse;

    @NotNull
    @Pattern(regexp = "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]")
    @Field("image_url")
    private String imageUrl;

    @Field("is_refundable")
    private Boolean isRefundable;

    @Field("is_pre_sale")
    private Boolean isPreSale;

    @Field("pre_sale_time")
    private Integer preSaleTime;

    @Field("skip_goods")
    private Integer skipGoods;

    @Field("share_desc")
    private String shareDesc;

    @Field("cat_id_1")
    private Integer catId1;

    @Field("cat_id_2")
    private Integer catId2;

    @Field("cat_id_3")
    private Integer catId3;

    @Field("sku")
    private List<Sku> skus = new ArrayList<>();

    @Field("gallery")
    private List<Gallery> galleries = new ArrayList<>();

    @Field("group")
    private List<Group> groups = new ArrayList<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Integer getCatId() {
        return catId;
    }

    public void setCatId(Integer catId) {
        this.catId = catId;
    }

    public Integer getMallId() {
        return mallId;
    }

    public void setMallId(Integer mallId) {
        this.mallId = mallId;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public Boolean getIsApp() {
        return isApp;
    }

    public void setIsApp(Boolean isApp) {
        this.isApp = isApp;
    }

    public Integer getEventType() {
        return eventType;
    }

    public void setEventType(Integer eventType) {
        this.eventType = eventType;
    }

    public String getGoodsDesc() {
        return goodsDesc;
    }

    public void setGoodsDesc(String goodsDesc) {
        this.goodsDesc = goodsDesc;
    }

    public Integer getMarketPrice() {
        return marketPrice;
    }

    public void setMarketPrice(Integer marketPrice) {
        this.marketPrice = marketPrice;
    }

    public Boolean getIsOnsale() {
        return isOnsale;
    }

    public void setIsOnsale(Boolean isOnsale) {
        this.isOnsale = isOnsale;
    }

    public String getThumbUrl() {
        return thumbUrl;
    }

    public void setThumbUrl(String thumbUrl) {
        this.thumbUrl = thumbUrl;
    }

    public String getAllowedRegion() {
        return allowedRegion;
    }

    public void setAllowedRegion(String allowedRegion) {
        this.allowedRegion = allowedRegion;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(String warehouse) {
        this.warehouse = warehouse;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getIsRefundable() {
        return isRefundable;
    }

    public void setIsRefundable(Boolean isRefundable) {
        this.isRefundable = isRefundable;
    }

    public Boolean getIsPreSale() {
        return isPreSale;
    }

    public void setIsPreSale(Boolean isPreSale) {
        this.isPreSale = isPreSale;
    }

    public Integer getPreSaleTime() {
        return preSaleTime;
    }

    public void setPreSaleTime(Integer preSaleTime) {
        this.preSaleTime = preSaleTime;
    }

    public Integer getSkipGoods() {
        return skipGoods;
    }

    public void setSkipGoods(Integer skipGoods) {
        this.skipGoods = skipGoods;
    }

    public String getShareDesc() {
        return shareDesc;
    }

    public void setShareDesc(String shareDesc) {
        this.shareDesc = shareDesc;
    }

    @JsonProperty("cat_id_1")
    public Integer getCatId1() {
        return catId1;
    }

    public void setCatId1(Integer catId1) {
        this.catId1 = catId1;
    }

    @JsonProperty("cat_id_2")
    public Integer getCatId2() {
        return catId2;
    }

    public void setCatId2(Integer catId2) {
        this.catId2 = catId2;
    }

    @JsonProperty("cat_id_3")
    public Integer getCatId3() {
        return catId3;
    }

    public void setCatId3(Integer catId3) {
        this.catId3 = catId3;
    }

    @JsonProperty("sku")
    public List<Sku> getSkus() {
        return skus;
    }

    public void addSku(Sku sku){
        skus.add(sku);
    }

    @JsonProperty("gallery")
    public List<Gallery> getGalleries() {
        return galleries;
    }

    public void addGallery(Gallery gallery) {
        this.galleries.add(gallery);
    }

    @JsonProperty("group")
    public List<Group> getGroups() {
        return groups;
    }

    public void addGroup(Group group) {
        this.groups.add(group);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Goods goods = (Goods) o;
        if(goods.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, goods.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

}
