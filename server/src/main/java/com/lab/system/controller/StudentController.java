package com.lab.system.controller;

import com.lab.system.dao.StudentJdbc;
import com.lab.system.model.Student;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentJdbc studentJdbc;

    public StudentController(StudentJdbc studentJdbc) {
        this.studentJdbc = studentJdbc;
    }

    @GetMapping("")
    public List<Student> getStudents() {
        return studentJdbc.getAll();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable int id) {
        return studentJdbc.get(id);
    }

    @GetMapping("/study_group/{studyGroupId}")
    public List<Student> getStudentByStudyGroup(@PathVariable int studyGroupId) {
        return studentJdbc.getAllByStudyGroup(studyGroupId);
    }

    @PostMapping(path = "", consumes = "application/json", produces = "application/json")
    public long addStudent(@RequestBody Student student) {
        return studentJdbc.create(student);
    }

    @PutMapping("/{id}")
    public void updateStudent(@PathVariable int id, @RequestBody Student student) {
        studentJdbc.update(id, student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentJdbc.delete(id);
    }
}
