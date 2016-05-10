package com.haoyaoge.repository;

import com.haoyaoge.domain.Goods;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Goods entity.
 */
@SuppressWarnings("unused")
public interface GoodsRepository extends MongoRepository<Goods,String> {

}
