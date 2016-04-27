package com.haoyaoge.web.rest;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by william on 16-4-27.
 */
@Controller
public class StatisticResource {
    @RequestMapping(method = RequestMethod.POST,value = "/t.gif")
    public ResponseEntity<String> t() throws Exception{
        return ResponseEntity.ok("");
    }
}
