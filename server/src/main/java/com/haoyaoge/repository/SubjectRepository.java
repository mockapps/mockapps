package com.haoyaoge.repository;

import com.haoyaoge.domain.Subject;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Subject entity.
 */
@SuppressWarnings("unused")
public interface SubjectRepository extends MongoRepository<Subject,String> {

}
