package com.haoyaoge.service;


import java.util.stream.Collectors;

import javax.inject.Inject;

import org.apache.commons.lang3.RandomUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.haoyaoge.domain.SmsCodeValidation;
import com.haoyaoge.domain.User;
import com.haoyaoge.repository.SmsCodeValidationRepository;
import com.haoyaoge.security.jwt.TokenProvider;

@Service
public class SmsAuthService {
    private Logger logger = LoggerFactory.getLogger(SmsAuthService.class);
    private int requestLimit = 10;
    private int failedLimit = 10;
    private long codeTtlSeconds = 3000;
    @Inject
    private TokenProvider tokenProvider;
    @Inject
    private UserService userService;

    @Inject
    private SmsCodeValidationRepository smsCodeValidationRepository;

    @Inject
    private AuthenticationManager authenticationManager;

    public String authentication(String mobile, String code) {

        User user = userService.getUserWithAuthoritiesByLogin(mobile).orElse(userService.createUserInformation(mobile, "", mobile, "", "", "", "zh-cn", "sms"));
        return smsCodeValidationRepository.findOneByMobile(mobile)
            .map(validation -> {
                    String token = null;
                    if (validation.verify(code, codeTtlSeconds)) {
                        token = tokenProvider.createToken(new UsernamePasswordAuthenticationToken(mobile, "", user.getAuthorities().stream()
                            .map(authority -> new SimpleGrantedAuthority(authority.getName()))
                            .collect(Collectors.toList())), true);
                    } else if (validation.getFailedAttempts() < failedLimit) {
                        smsCodeValidationRepository.save(validation.failedOnce());
                    }
                    return token;
                }
            )
            .orElse(null);
    }

    public void sendSmsCode(String mobile) {
        SmsCodeValidation validation = smsCodeValidationRepository.findOneByMobile(mobile)
            .orElseGet(() -> smsCodeValidationRepository.save(new SmsCodeValidation(mobile)));
        if (validation.getRequestAttempts() < requestLimit) {
            //send code
            smsCodeValidationRepository.save(validation.withCode(generateCode()).requestedCodeOnce());
        }

    }

    private String generateCode() {
        String code = String.valueOf(RandomUtils.nextInt(0, 900000) + 100000);
        logger.info("SMS Code: {}", code);
        return code;
    }
}
