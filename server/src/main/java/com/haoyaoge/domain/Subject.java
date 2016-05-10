package com.haoyaoge.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Subject.
 */

@Document(collection = "subject")
public class Subject implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("subject")
    private String subject;

    @Field("second_name")
    private String second_name;

    @Field("desc")
    private String desc;

    @NotNull
    @Pattern(regexp = "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]")
    @Field("home_banner")
    private String home_banner;

    @NotNull
    @Field("type")
    private String type;

    @Field("position")
    private Integer position;

    @Field("share_image")
    private String share_image;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getSecond_name() {
        return second_name;
    }

    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getHome_banner() {
        return home_banner;
    }

    public void setHome_banner(String home_banner) {
        this.home_banner = home_banner;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    public String getShare_image() {
        return share_image;
    }

    public void setShare_image(String share_image) {
        this.share_image = share_image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Subject subject = (Subject) o;
        if(subject.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, subject.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Subject{" +
            "id=" + id +
            ", subject='" + subject + "'" +
            ", second_name='" + second_name + "'" +
            ", desc='" + desc + "'" +
            ", home_banner='" + home_banner + "'" +
            ", type='" + type + "'" +
            ", position='" + position + "'" +
            ", share_image='" + share_image + "'" +
            '}';
    }
}
