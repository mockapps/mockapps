package com.haoyaoge.web.rest.dto;

/**
 * Created by chouxinxin on 16-5-10.
 */
public class ErrorDTO {
    private int errorCode;
    private String errorMsg;
    public ErrorDTO(){}
    public ErrorDTO(int code,String message){
        errorCode=code;
        errorMsg=message;
    }
    public int getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
