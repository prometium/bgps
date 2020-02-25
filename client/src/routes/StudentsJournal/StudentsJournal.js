import React from 'react';
import { Table } from 'react-bootstrap';

const markColorsMap = {
  5: '#c5e1a5',
  4: '#fff59d',
  3: '#ffcc80',
  2: '#ffab91',
  з: '#c5e1a5',
  н: '#ffab91'
};

function StudentsJournal({ studentsJournal, subjects }) {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>ФИО студента</th>
          {subjects.map(subject => (
            <th key={subject}>{subject}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {studentsJournal.map(studentRecord => (
          <tr key={studentRecord.id}>
            <td>{studentRecord.id}</td>
            <td>{studentRecord.student_full_name}</td>
            {subjects.map(subject => {
              const examData = studentRecord[subject];
              const markValue = examData && examData.mark_value;
              const examType = examData && examData.exam_type;
              const count = examData && examData.count;

              return (
                <td
                  key={subject}
                  style={{
                    position: 'relative',
                    backgroundColor: markColorsMap[markValue]
                  }}
                >
                  {markValue}
                  <span
                    style={{
                      fontSize: 12,
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: '#fff'
                    }}
                  >
                    {examType}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      position: 'absolute',
                      bottom: 0,
                      right: 0
                    }}
                  >
                    {count > 0 && `Пересдач: ${count}`}
                  </span>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StudentsJournal;
