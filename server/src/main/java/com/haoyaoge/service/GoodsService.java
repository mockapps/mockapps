package com.haoyaoge.service;

import com.haoyaoge.domain.Goods;
import com.haoyaoge.web.rest.dto.GoodsDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GoodsService {

    public Map<String, List<GoodsDTO>> getGoodsDTOMap(List<Goods> goodsList) {
        List<GoodsDTO> goodsDTOs = new ArrayList<>(goodsList.size());
        goodsList.stream().forEach(goods -> {
            GoodsDTO simpleGoods = new GoodsDTO();
            goodsDTOs.add(simpleGoods);
            simpleGoods.setGoodsId(goods.getId())
                .setApp(goods.getIsApp())
                .setGoodsName(goods.getGoodsName())
                .setImageUrl(goods.getImageUrl())
                .setMallId(goods.getMallId())
                .setMarketPrice(goods.getMarketPrice());
            goods.getGroups().stream().filter(group -> group.getIsOpen() && group.getCustomerNum() > 1)
                .forEach(group -> simpleGoods.setGroup(group.getPrice(), group.getCustomerNum()));
        });
        Map<String, List<GoodsDTO>> goodsDTOMap = new HashMap<>(1);
        goodsDTOMap.put("goods_list", goodsDTOs);
        return goodsDTOMap;
    }
}
