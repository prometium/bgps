package com.lab.system.controller;

import com.lab.system.dao.StudyGroupJdbc;
import com.lab.system.model.StudyGroup;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudyGroupController {

    private final StudyGroupJdbc studyGroupJdbc;

    public StudyGroupController(StudyGroupJdbc studyGroupJdbc) {
        this.studyGroupJdbc = studyGroupJdbc;
    }

    @GetMapping("/study_groups")
    public List<StudyGroup> getStudyGroup() {
        return studyGroupJdbc.getAll();
    }

    @GetMapping("/study_groups/{id}")
    public StudyGroup getStudyGroup(@PathVariable int id) {
        return studyGroupJdbc.get(id);
    }

    @PostMapping(path = "/study_groups", consumes = "application/json", produces = "application/json")
    public void addStudyGroup(@RequestBody StudyGroup studyGroup) {
        studyGroupJdbc.create(studyGroup);
    }

    @PutMapping("/study_groups/{id}")
    public void updateStudyGroup(@PathVariable int id, @RequestBody StudyGroup studyGroup) {
        studyGroupJdbc.update(id, studyGroup);
    }

    @DeleteMapping("/study_groups/{id}")
    public void deleteStudyGroup(@PathVariable int id) {
        studyGroupJdbc.delete(id);
    }
}
