package br.com.taskme.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "db_users")
public class Users {

  @Id
  private String id;

  @JsonIgnore
  private String _class;

  private LocalDate data_criacao = LocalDate.now();
  
  private String name;

  @Indexed(unique = true)
  private String email;
  
}
