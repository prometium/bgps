import React from 'react';
import studentController from 'src/services/studentController';
import studyGroupController from 'src/services/studyGroupController';
import Students from './Students';

function StudentsContainer() {
  const [students, setStudents] = React.useState([]);
  const [studyGroups, setStudyGroups] = React.useState([]);

  React.useEffect(() => {
    studentController.getAll().then(students => {
      if (students) {
        setStudents(students);
      }
    });

    studyGroupController.getAll().then(studyGroups => {
      setStudyGroups(studyGroups);
    });
  }, []);

  const handleDelete = id => () => {
    studentController.delete(id).then(result => {
      if (result === 1) {
        setStudents(students.filter(student => student.id !== id));
      }
    });
  };

  const handleUpdate = newStudent => {
    studentController
      .update(newStudent.id, newStudent)
      .then(result => {
        if (result === 1) {
          return studentController.get(newStudent.id);
        }
        return Promise.reject(result);
      })
      .then(updatedStudent => {
        setStudents(
          students.map(student => {
            if (student.id === updatedStudent.id) {
              return updatedStudent;
            }
            return student;
          })
        );
      });
  };

  const handleCreation = newStudent => {
    studentController
      .create(newStudent)
      .then(id => {
        if (id !== undefined) {
          return studentController.get(id);
        }
        return Promise.reject(id);
      })
      .then(student => {
        setStudents([...students, student]);
      });
  };

  const handleTransfer = (id, studyGroupId) => () => {
    studentController
      .transfer(id, studyGroupId)
      .then(result => {
        if (result === 1) {
          return studentController.get(id);
        }
        return Promise.reject(result);
      })
      .then(updatedStudent => {
        setStudents(
          students.map(student => {
            if (student.id === updatedStudent.id) {
              return updatedStudent;
            }
            return student;
          })
        );
      });
  };

  return (
    <Students
      students={students}
      studyGroups={studyGroups}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      handleCreation={handleCreation}
      handleTransfer={handleTransfer}
    />
  );
}

export default StudentsContainer;
