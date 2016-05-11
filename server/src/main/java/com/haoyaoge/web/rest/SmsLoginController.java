package com.haoyaoge.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.haoyaoge.domain.AccessToken;
import com.haoyaoge.service.SmsAuthService;
import com.haoyaoge.web.rest.dto.ErrorDTO;
import com.haoyaoge.web.rest.dto.SmsLoginDTO;

@RestController
@RequestMapping("/mock")
public class SmsLoginController {
    @Autowired
    private SmsAuthService smsAuthService;
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody SmsLoginDTO user) {
        String token = smsAuthService.authentication(user.getMobile(), user.getCode());
        if (null != token) {
            return ResponseEntity.ok(new AccessToken(token));
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ErrorDTO(40006, "手机登录验证码错误"));
        }

    }

}
