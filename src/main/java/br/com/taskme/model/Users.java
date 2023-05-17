package br.com.taskme.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Document(collection = "db_users")
public class Users {

  @Id
  private String id;

  @JsonIgnore
  private String _class;
  
  private String name;

  @Indexed(unique = true)
  private String email;

  public Users() {}

  public Users(String id, String name, String email) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
}
