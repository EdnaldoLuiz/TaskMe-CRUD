package br.com.taskme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import br.com.taskme.config.MongoConfig;

@SpringBootApplication
@Import(MongoConfig.class)
public class TaskmeApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskmeApplication.class, args);
	}

}
