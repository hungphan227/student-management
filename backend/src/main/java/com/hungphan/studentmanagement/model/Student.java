package com.hungphan.studentmanagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import java.math.BigDecimal;

@Entity
public class Student {

    @Id
    @Column(name = "ID")
    @GeneratedValue(generator = "STUDENT_GEN", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "STUDENT_GEN", sequenceName = "STUDENT_SEQ", allocationSize = 1)
    private Long id;
    
    private String name;
    private Integer age;

    // avoid this "No default constructor for entity"
    public Student() {
    }

    public Student(Long id, String name, Integer age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public Student(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age='" + age +
                '}';
    }

}
