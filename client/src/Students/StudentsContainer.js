import React from 'react';
import studyGroupController from 'src/services/studyGroupController';
import studentController from 'src/services/studentController';
import Students from './Students';

function StudentsContainer() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    studyGroupController.getAll().then(studyGroups => {
      studentController.getAll().then(students => {
        setStudents(
          students.map(student => ({
            ...student,
            study_group:
              studyGroups[
                studyGroups.findIndex(
                  studyGroup => (studyGroup.id = student.id)
                )
              ].name
          }))
        );
      });
    });
  }, []);

  const handleDelete = id => () => {
    studentController.delete(id).then(() => {
      setStudents(students.filter(student => student.id !== id));
    });
  };

  const handleUpdate = newStudent => {
    studentController.update(newStudent.id, newStudent).then(() => {
      setStudents(
        students.map(student => {
          if (student.id === newStudent.id) {
            return newStudent;
          }
          return student;
        })
      );
    });
  };

  const handleCreation = newStudent => {
    studentController.create(newStudent).then(id => {
      if (id !== undefined) {
        setStudents([...students, { id, ...newStudent }]);
      }
    });
  };

  return (
    <Students
      students={students}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      handleCreation={handleCreation}
    />
  );
}

export default StudentsContainer;
