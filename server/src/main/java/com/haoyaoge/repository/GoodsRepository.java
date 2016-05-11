package com.haoyaoge.repository;

import com.haoyaoge.domain.Goods;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Spring Data MongoDB repository for the Goods entity.
 */
public interface GoodsRepository extends MongoRepository<Goods,String> {

    @Query(value = "{}", fields="{ 'id': 1, 'goods_name' : 1, 'image_url' : 1, 'market_price': 1, 'is_app': 1, 'group': 1, 'mall_id': 1}")
    List<Goods> findSimpleGoods();

    @Query(value = "{ 'subject_id': ?0 }", fields="{ 'id': 1, 'goods_name' : 1, 'image_url' : 1, 'market_price': 1, 'is_app': 1, 'group': 1, 'mall_id': 1}")
    List<Goods> findBySubjectId(String subjectId);
}
