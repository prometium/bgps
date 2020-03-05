import React, { Fragment } from 'react';
import useForm from 'src/hooks/useForm';
import journalRecordController from 'src/services/journalRecordController';
import studyGroupController from 'src/services/studyGroupController';
import StudentsJournal from './StudentsJournal';
import Filter from './Filter';

function StudentsJournalContainer() {
  const [studentsJournal, setStudentsJournal] = React.useState([]);
  const [sortedStudentsJournal, setSortedStudentsJournal] = React.useState([]);
  const [subjects, setSubjects] = React.useState([]);
  const [studyGroups, setStudyGroups] = React.useState([]);

  React.useEffect(() => {
    studyGroupController.getAll().then(studyGroups => {
      if (studyGroups) {
        setStudyGroups(studyGroups);
      }
    });
  }, []);

  const { inputs, handleChange } = useForm({
    study_group_id: '-1',
    sort_option: '0'
  });

  React.useEffect(() => {
    const handleResult = journalRecords => {
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
          studentsMapRecord.marks_sum += +journalRecord.mark_value || 0;
        } else {
          studentsMap[journalRecord.student_id] = {
            id: journalRecord.student_id,
            student_full_name: journalRecord.student_full_name,
            marks_sum: +journalRecord.mark_value || 0,
            [journalRecord.subject_short_name]: examData
          };
        }
      });

      setStudentsJournal(Object.values(studentsMap));
      setSubjects(Object.keys(subjectsMap));
    };

    if (inputs.study_group_id !== '-1') {
      journalRecordController
        .getAllByStudyGroup(inputs.study_group_id)
        .then(journalRecords => {
          if (journalRecords) {
            handleResult(journalRecords);
          }
        });
    } else {
      journalRecordController.getAll().then(handleResult);
    }
  }, [inputs.study_group_id]);

  React.useEffect(() => {
    const sortByName = studentsJournal => {
      return studentsJournal.sort((studentRecord1, studentRecord2) =>
        studentRecord1.student_full_name.localeCompare(
          studentRecord2.student_full_name
        )
      );
    };

    const sortByMarksSum = studentsJournal => {
      return studentsJournal.sort(
        (studentRecord1, studentRecord2) =>
          studentRecord2.marks_sum - studentRecord1.marks_sum
      );
    };

    if (inputs.sort_option === '0') {
      setSortedStudentsJournal(sortByName(studentsJournal.slice()));
    } else {
      setSortedStudentsJournal(sortByMarksSum(studentsJournal.slice()));
    }
  }, [inputs.sort_option, studentsJournal]);

  return (
    <Fragment>
      <Filter
        studyGroups={studyGroups}
        inputs={inputs}
        handleChange={handleChange}
      />
      <StudentsJournal
        studentsJournal={sortedStudentsJournal}
        subjects={subjects}
      />
    </Fragment>
  );
}

export default StudentsJournalContainer;
