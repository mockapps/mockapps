package com.haoyaoge.web.rest;

import com.fasterxml.jackson.core.JsonGenerator;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/mock")
public class MockApiResource {
    @Autowired
    private ResourceLoader resourceLoader;
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public String login() {
        return "{\"access_token\":\"7d07ca9bd198b6c49be865e66f8767c0e13b6160\"}";
    }

    @RequestMapping(value = "/user/me", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String userMe() throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/user_me.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/v2/goods", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String goods() throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/goods.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/goods/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String goodsById(@PathVariable Long id) throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/good"+id+".json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/subjects", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String subjects() throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/subjects.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/subject/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String subjectById(@PathVariable Long id) throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/subject.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/v2/subject/{id}/goods", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String subjectGoods(@PathVariable Long id) throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/subject_goods.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/v2/randlist", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String randlist() throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/randlist.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/v2/newlist", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String newlist() throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/newlist.json").getInputStream(),"UTF-8");
    }
    @RequestMapping(value = "/v2/ranklist", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String ranklist() throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/ranklist.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/operations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String operations() throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/operations.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/mall/{id}/info", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String mallInfo(@PathVariable Long id) throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/mall_info.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String search(@RequestParam String q) throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/search.json").getInputStream(),"UTF-8");
    }

    @RequestMapping(value = "/group", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String group(@RequestParam String q) throws Exception{
        return IOUtils.toString(resourceLoader.getResource("classpath:/json/search.json").getInputStream(),"UTF-8");
    }

}
