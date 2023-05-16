package br.com.taskme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.taskme.model.Users;
import br.com.taskme.service.UsersRepository;

@RestController
public class UsersController {

  @Autowired
  private UsersRepository repository;

  @GetMapping(value = "/users")
  public List<Users> getUsers() {
    List<Users> users = repository.findAll();
    return users;
  }

  @PostMapping(value = "/users")
  public Users enviarLinguagem(@RequestBody Users users) {
    Users savedUsers = repository.save(users);
    return savedUsers;
  }

}