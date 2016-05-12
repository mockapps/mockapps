package com.haoyaoge.domain;

import java.time.ZonedDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "sms_code_validation")
public class SmsCodeValidation extends AbstractAuditingEntity {
    private static final long serialVersionUID = 1L;
    @Id
    private String id;

    @Field("failed_attempts")
    private int failedAttempts;
    @Field("request_attempts")
    private int requestAttempts;
    @Field("code")
    private String code;
    @Field("mobile")
    private String mobile;

    public SmsCodeValidation(){}
    public SmsCodeValidation(String mobile){
        this.mobile=mobile;
    }

    public SmsCodeValidation failedOnce(){
        this.failedAttempts++;
        return this;
    }

    public SmsCodeValidation requestedCodeOnce(){
        this.requestAttempts++;
        return this;
    }

    public boolean verify(String code,long ttlSeconds){
        return getLastModifiedDate().plusSeconds(ttlSeconds).isAfter(ZonedDateTime.now()) && getCode().equals(code);
    }

    public SmsCodeValidation withCode(String code){
        this.code=code;
        return this;
    }

    public int getFailedAttempts() {
        return failedAttempts;
    }

    public void setFailedAttempts(int failedAttempts) {
        this.failedAttempts = failedAttempts;
    }

    public int getRequestAttempts() {
        return requestAttempts;
    }

    public void setRequestAttempts(int requestAttempts) {
        this.requestAttempts = requestAttempts;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
