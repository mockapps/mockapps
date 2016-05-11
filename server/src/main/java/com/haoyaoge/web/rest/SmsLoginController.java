package com.haoyaoge.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.haoyaoge.service.UserService;
import com.haoyaoge.web.rest.dto.SmsLoginDTO;

@RestController
@RequestMapping("/mock")
public class SmsLoginController {
    @Autowired
    private UserService userService;
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody SmsLoginDTO user) {
        return ResponseEntity.ok(userService.login(user.getMobile(),user.getCode()));
    }

}
