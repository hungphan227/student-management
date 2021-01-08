package com.hungphan.studentmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hungphan.studentmanagement.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
    
}
