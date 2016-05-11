package com.haoyaoge.service;


import javax.inject.Inject;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.haoyaoge.security.jwt.TokenProvider;

@Service
public class SmsAuthService {
    @Inject
    private TokenProvider tokenProvider;
    @Inject
    private UserService userService;

    public String authentication(String mobile, String code) {
        //userService.getUserWithAuthoritiesByLogin()
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(mobile, "");
        return tokenProvider.createToken(auth, true);
    }

    public void sendSmsCode(String mobile) {

    }
}
