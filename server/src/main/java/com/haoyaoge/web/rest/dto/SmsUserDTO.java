package com.haoyaoge.web.rest.dto;

public class SmsUserDTO {
    private String uid;
    private String nickname;
    private String idCardNo;
    private String idCardName;
    private boolean isSubscribed=true;
    private boolean hasLoginApp=true;

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public boolean isHasLoginApp() {
        return hasLoginApp;
    }

    public void setHasLoginApp(boolean hasLoginApp) {
        this.hasLoginApp = hasLoginApp;
    }

    public boolean isSubscribed() {
        return isSubscribed;
    }

    public void setSubscribed(boolean subscribed) {
        isSubscribed = subscribed;
    }

    public String getIdCardName() {
        return idCardName;
    }

    public void setIdCardName(String idCardName) {
        this.idCardName = idCardName;
    }

    public String getIdCardNo() {
        return idCardNo;
    }

    public void setIdCardNo(String idCardNo) {
        this.idCardNo = idCardNo;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
