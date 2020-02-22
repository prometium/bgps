package com.lab.system.controller;

import com.lab.system.dao.JournalRecordJdbc;
import com.lab.system.model.JournalRecord;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JournalRecordController {

    private final JournalRecordJdbc journalRecordJdbc;

    public JournalRecordController(JournalRecordJdbc journalRecordJdbc) {
        this.journalRecordJdbc = journalRecordJdbc;
    }

    @GetMapping("/journal/{id}")
    public JournalRecord getJournalRecord(@PathVariable int id) {
        return journalRecordJdbc.get(id);
    }

    @GetMapping("/journal/student/{studentId}")
    public List<JournalRecord> getJournalRecordsByStudent(@PathVariable int studentId) {
        return journalRecordJdbc.getAllByStudent(studentId);
    }

    @GetMapping("/journal/study_group/{studyGroupId}")
    public List<JournalRecord> getJournalRecordsByStudyGroup(@PathVariable int studyGroupId) {
        return journalRecordJdbc.getAllByStudyGroup(studyGroupId);
    }

    @PostMapping(path = "/journal", consumes = "application/json", produces = "application/json")
    public void addJournalRecord(@RequestBody JournalRecord journalRecord) {
        journalRecordJdbc.create(journalRecord);
    }

    @PutMapping("/journal/{id}")
    public void updateJournalRecord(@PathVariable int id, @RequestBody JournalRecord journalRecord) {
        journalRecordJdbc.update(id, journalRecord);
    }

    @DeleteMapping("/journal/{id}")
    public void deleteJournalRecord(@PathVariable int id) {
        journalRecordJdbc.delete(id);
    }
}
