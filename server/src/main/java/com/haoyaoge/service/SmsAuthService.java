package com.haoyaoge.service;


import java.util.stream.Collectors;

import javax.inject.Inject;

import org.apache.commons.lang3.RandomUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.haoyaoge.HaoyaogeException;
import com.haoyaoge.config.Constants;
import com.haoyaoge.domain.SmsCodeValidation;
import com.haoyaoge.domain.User;
import com.haoyaoge.repository.SmsCodeValidationRepository;
import com.haoyaoge.security.jwt.TokenProvider;
import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;

@Service
public class SmsAuthService {
    private Logger logger = LoggerFactory.getLogger(SmsAuthService.class);
    @Value("${app.request_limit}")
    private int requestLimit = 10;
    @Value("${app.failed_limit}")
    private int failedLimit = 10;
    @Value("${app.code_ttl_limit}")
    private long codeTtlSeconds = 3000;
    @Value("${app.sms_app_key}")
    private String appKey = "";
    @Value("${app.sms_app_secret}")
    private String appSecret = "";
    @Value("${app.sms_api_url}")
    private String apiUrl = "";
    @Value("${app.sms_template_code}")
    private String smsTemplateCode = "";
    @Value("${app.product_name}")
    private String productName = "";
    @Inject
    private Environment env;
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
            smsCodeValidationRepository.save(validation.withCode(sendSms(mobile)).requestedCodeOnce());
        }

    }

    private String sendSms(String mobile) {
        String code = String.valueOf(RandomUtils.nextInt(0, 900000) + 100000);
        if (env.acceptsProfiles(Constants.SPRING_PROFILE_PRODUCTION)) {
            AlibabaAliqinFcSmsNumSendResponse rsp;
            try {
                TaobaoClient client = new DefaultTaobaoClient(apiUrl, appKey, appSecret);
                AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
                req.setSmsType("normal");
                req.setSmsFreeSignName(productName);
                req.setSmsParamString(String.format("{\"code\":\"%s\"}", code));
                req.setRecNum(mobile);
                req.setSmsTemplateCode(smsTemplateCode);
                rsp = client.execute(req);
            } catch (ApiException e) {
                throw new HaoyaogeException("Send sms failed.", e);
            }
            if (null == rsp || !rsp.isSuccess()) {
                throw new HaoyaogeException("Send sms failed.");
            }
        }
        logger.info("SMS Code: {}", code);
        return code;
    }
}
