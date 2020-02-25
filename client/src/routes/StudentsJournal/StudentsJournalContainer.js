import React from 'react';
import journalRecordController from 'src/services/journalRecordController';
import StudentsJournal from './StudentsJournal';

function StudentsJournalContainer() {
  const [studentsJournal, setStudentsJournal] = React.useState([]);
  const [subjects, setSubjects] = React.useState([]);

  React.useEffect(() => {
    journalRecordController.getAll().then(journalRecords => {
      const studentsMap = {};
      const subjectsMap = {};

      journalRecords.forEach(journalRecord => {
        subjectsMap[journalRecord.subject_short_name] = true;

        const studentsMapRecord = studentsMap[journalRecord.student_id];
        const examData = {
          exam_type: journalRecord.exam_type,
          mark_value: journalRecord.mark_value,
          count: journalRecord.count
        };
        if (studentsMapRecord) {
          studentsMapRecord[journalRecord.subject_short_name] = examData;
        } else {
          studentsMap[journalRecord.student_id] = {
            id: journalRecord.student_id,
            student_full_name: journalRecord.student_full_name,
            [journalRecord.subject_short_name]: examData
          };
        }
      });

      setStudentsJournal(Object.values(studentsMap));
      setSubjects(Object.keys(subjectsMap));
    });
  }, []);

  return (
    <StudentsJournal studentsJournal={studentsJournal} subjects={subjects} />
  );
}

export default StudentsJournalContainer;
