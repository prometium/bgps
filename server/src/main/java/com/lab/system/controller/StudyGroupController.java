package com.lab.system.controller;

import com.lab.system.dao.StudyGroupJdbc;
import com.lab.system.model.StudyGroup;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/study_groups")
public class StudyGroupController {

    private final StudyGroupJdbc studyGroupJdbc;

    public StudyGroupController(StudyGroupJdbc studyGroupJdbc) {
        this.studyGroupJdbc = studyGroupJdbc;
    }

    @GetMapping(path = "")
    public List<StudyGroup> getStudyGroups() {
        return studyGroupJdbc.getAll();
    }

    @GetMapping(path = "/{id}")
    public StudyGroup getStudyGroup(@PathVariable int id) {
        return studyGroupJdbc.get(id);
    }

    @PostMapping(path = "", consumes = "application/json", produces = "application/json")
    public long addStudyGroup(@RequestBody StudyGroup studyGroup) {
        return studyGroupJdbc.create(studyGroup);
    }

    @PutMapping("/{id}")
    public int updateStudyGroup(@PathVariable int id, @RequestBody StudyGroup studyGroup) {
        return studyGroupJdbc.update(id, studyGroup);
    }

    @DeleteMapping("/{id}")
    public int deleteStudyGroup(@PathVariable int id) {
        return studyGroupJdbc.delete(id);
    }
}
