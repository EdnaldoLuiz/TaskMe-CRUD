package br.com.taskme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.taskme.model.Users;
import br.com.taskme.service.UsersRepository;

@RestController
@RequestMapping("/users")
public class UsersController {

  @Autowired
  private UsersRepository repository;

  @GetMapping 
  public List<Users> getUsers() {
    List<Users> users = repository.findAll();
    return users;
  }

  @PostMapping
  public Users createUser(@RequestBody Users user) {
    Users savedUser = repository.save(user);
    return savedUser;
  }

  @PutMapping("/{id}")
  public Users updateUserById(@PathVariable("id") String id, @RequestBody Users updatedUser) {
    Users existingUser = repository.findById(id).orElse(null);

    if (existingUser != null) {
      existingUser.setName(updatedUser.getName());
      existingUser.setEmail(updatedUser.getEmail());
      repository.save(existingUser);
    }
    return existingUser;
  }

  @DeleteMapping("/{id}")
  public String deleteUserById(@PathVariable("id") String id) {
    Users user = repository.findById(id).orElse(null);
    if (user != null) {
      repository.delete(user);
      return "Deletado com Sucesso!";
    } else {
      return "Usuário não encontrado.";
    }
  }
}