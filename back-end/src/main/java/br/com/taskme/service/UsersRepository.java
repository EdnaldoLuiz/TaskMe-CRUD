package br.com.taskme.service;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.taskme.model.Users;

public interface UsersRepository extends MongoRepository<Users, String> {
    Optional<Users> findById(String id);
}