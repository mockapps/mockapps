package com.haoyaoge.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.haoyaoge.domain.SmsCodeValidation;

public interface SmsCodeValidationRepository extends MongoRepository<SmsCodeValidation, String> {
    Optional<SmsCodeValidation> findOneByMobile(String mobile);
}
