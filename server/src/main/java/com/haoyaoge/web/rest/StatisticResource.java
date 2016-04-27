package com.haoyaoge.web.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by william on 16-4-27.
 */
@RestController
public class StatisticResource {
    @RequestMapping(method = RequestMethod.POST,value = "/t.gif", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public byte[] t() throws Exception{
        return new byte[]{};
    }
}
