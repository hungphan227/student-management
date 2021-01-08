package com.hungphan.studentmanagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.hungphan.studentmanagement.model.Student;
import com.hungphan.studentmanagement.repository.StudentRepository;

@SpringBootApplication
public class StartStudentApplication {

    // start everything
    public static void main(String[] args) {
        SpringApplication.run(StartStudentApplication.class, args);
        new ChatClient().run();
    }

    // run this only on profile 'demo', avoid run this in test
    @Profile("demo")
    @Bean
    CommandLineRunner initDatabase(StudentRepository repository) {
        return args -> {
            repository.save(new Student("Harry Potter", 20));
            repository.save(new Student("Peter Pevensia", 22));
            repository.save(new Student("Gandalf The White", 100));
        };
    }
}