package com.haoyaoge.web.rest.dto;

import com.haoyaoge.config.Constants;

import com.haoyaoge.domain.Authority;
import com.haoyaoge.domain.User;

import org.hibernate.validator.constraints.Email;

import javax.validation.constraints.*;
import java.util.Set;
import java.util.stream.Collectors;
/**
 * A DTO representing a user, with his authorities.
 */
public class UserDTO {

    @Pattern(regexp = Constants.LOGIN_REGEX)
    @NotNull
    @Size(min = 1, max = 50)
    private String login;

    @Size(max = 50)
    private String nickName;

    @Size(max = 50)
    private String idCardNo;

    @Size(max = 50)
    private String idCardName;

    @Email
    @Size(min = 5, max = 100)
    private String email;

    private boolean activated = false;

    @Size(min = 2, max = 5)
    private String langKey;

    private Set<String> authorities;
    @Size(min = 2, max = 5)
    private String type="sms";

    public UserDTO() {
    }

    public UserDTO(User user) {
        this(user.getLogin(), user.getNickName(),user.getIdCardName(),user.getIdCardNo(),
            user.getEmail(), user.getActivated(), user.getLangKey(),user.getType(),
            user.getAuthorities().stream().map(Authority::getName)
                .collect(Collectors.toSet()));
    }

    public UserDTO(String login,String nickName,String idCardName,String idCardNo,
        String email, boolean activated, String langKey, String type,Set<String> authorities) {

        this.login = login;
        this.nickName = nickName;
        this.idCardName=idCardName;
        this.idCardNo=idCardNo;
        this.email = email;
        this.activated = activated;
        this.langKey = langKey;
        this.type=type;
        this.authorities = authorities;
    }

    public String getLogin() {
        return login;
    }

    public String getEmail() {
        return email;
    }

    public boolean isActivated() {
        return activated;
    }

    public String getLangKey() {
        return langKey;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getIdCardNo() {
        return idCardNo;
    }

    public void setIdCardNo(String idCardNo) {
        this.idCardNo = idCardNo;
    }

    public String getIdCardName() {
        return idCardName;
    }

    public void setIdCardName(String idCardName) {
        this.idCardName = idCardName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
            "login='" + login + '\'' +
            ", nickName='" + nickName + '\'' +
            ", email='" + email + '\'' +
            ", activated=" + activated +
            ", langKey='" + langKey + '\'' +
            ", authorities=" + authorities +
            "}";
    }
}
