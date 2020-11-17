package com.mkyong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class StudentController {

    @Autowired
    private StudentRepository repository;

    // Find
    @GetMapping("/student")
    List<Student> findAll() {
        return repository.findAll();
    }

    // Save
    @PostMapping("/student")
    //return 201 instead of 200
    @ResponseStatus(HttpStatus.CREATED)
    Student newStudent(@RequestBody Student newStudent) {
        return repository.save(newStudent);
    }

    // Find
    @GetMapping("/student/{id}")
    Student findOne(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found" + id));
    }

    // Save or update
    @PutMapping("/student/{id}")
    Student saveOrUpdate(@RequestBody Student newStudent, @PathVariable Long id) {

        return repository.findById(id)
                .map(x -> {
                    x.setName(newStudent.getName());
                    x.setAge(newStudent.getAge());
                    return repository.save(x);
                })
                .orElseGet(() -> {
                    newStudent.setId(id);
                    return repository.save(newStudent);
                });
    }

    // update author only
    @PatchMapping("/student/{id}")
    Student patch(@RequestBody Map<String, String> update, @PathVariable Long id) {

        return repository.findById(id)
                .map(x -> {
                    String name = update.get("name");
                    if (!StringUtils.isEmpty(name)) {
                        x.setName(name);

                        // better create a custom method to update a value = :newValue where id = :id
                        return repository.save(x);
                    } else {
                        throw new RuntimeException("update not allow");
                    }

                })
                .orElseGet(() -> {
                    throw new RuntimeException("Student not found" + id);
                });

    }

    @DeleteMapping("/student/{id}")
    void deleteStudent(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
