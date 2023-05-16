package br.com.taskme.service;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.taskme.model.Users;

public interface UsersRepository extends MongoRepository<Users, String> {
    
}