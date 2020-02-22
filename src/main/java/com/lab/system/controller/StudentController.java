package com.lab.system.controller;

import com.lab.system.dao.StudentJdbc;
import com.lab.system.model.Student;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    private final StudentJdbc studentJdbc;

    public StudentController(StudentJdbc studentJdbc) {
        this.studentJdbc = studentJdbc;
    }

    @GetMapping("/students")
    public List<Student> getStudents() {
        return studentJdbc.getAll();
    }

    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable int id) {
        return studentJdbc.get(id);
    }

    @PostMapping(path = "/students", consumes = "application/json", produces = "application/json")
    public int addStudent(@RequestBody Student student) {
        return studentJdbc.create(student);
    }
}
