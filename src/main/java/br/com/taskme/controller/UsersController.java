package br.com.taskme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

  @PutMapping(value = "/users/{email}")
  public Users updateUserByEmail(@PathVariable("email") String email, @RequestBody Users updatedUser) {
    Users existingUser = repository.findByEmail(email);

    if (existingUser != null) {
      existingUser.setName(updatedUser.getName());
      existingUser.setEmail(updatedUser.getEmail());
      repository.save(existingUser);
    }

    return existingUser;
  }

  @DeleteMapping(value = "/users/{email}")
  public String deleteUser(@PathVariable("email") String email) {
    Users user = repository.findByEmail(email);
    if (user != null) {
      repository.delete(user);
      return "Deletado com Sucesso!";
    } else {
      return "Usuário não encontrado.";
    }
  }

  @GetMapping(value = "/")
  public String test() {
    return "Hi";
  }


}