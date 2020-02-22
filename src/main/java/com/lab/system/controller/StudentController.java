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

    @GetMapping("/students/studyGroup/{studyGroupId}")
    public List<Student> getStudentByStudyGroup(@PathVariable int studyGroupId) {
        return studentJdbc.getAllByStudyGroup(studyGroupId);
    }

    @PostMapping(path = "/students", consumes = "application/json", produces = "application/json")
    public int addStudent(@RequestBody Student student) {
        return studentJdbc.create(student);
    }

    @PutMapping("/students/{id}")
    public void updateStudent(@PathVariable int id, @RequestBody Student student) {
        studentJdbc.update(id, student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentJdbc.delete(id);
    }
}
