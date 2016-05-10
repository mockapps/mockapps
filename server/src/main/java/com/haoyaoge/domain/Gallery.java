package com.haoyaoge.domain;

import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class Gallery {
    @Field("id")
    private Integer id;

    @Field("url")
    @NotNull
    @Pattern(regexp = "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]")
    private String url;

    @Field("width")
    private Integer width;

    @Field("height")
    private Integer height;

    @Field("priority")
    private Integer priority;

    @Field("type")
    private Integer type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "gallery{" +
            "id=" + id +
            ", url='" + url + '\'' +
            ", width=" + width +
            ", height=" + height +
            ", priority=" + priority +
            ", type=" + type +
            '}';
    }
}
