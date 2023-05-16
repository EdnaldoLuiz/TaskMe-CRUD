package br.com.taskme.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "db_users")
public class Users {

  @Id
  private String id;
  private String name;
  private String email;

  public Users() {}

  public Users(String id, String name, String email) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
}
