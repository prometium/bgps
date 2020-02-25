import React from 'react';
import studentController from 'src/services/studentController';
import Students from './Students';

function StudentsContainer() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    studentController.getAll().then(students => {
      setStudents(students);
    });
  }, []);

  const handleDelete = id => () => {
    studentController.delete(id).then(() => {
      setStudents(students.filter(student => student.id !== id));
    });
  };

  const handleUpdate = newStudent => {
    studentController.update(newStudent.id, newStudent).then(() => {
      studentController.get(newStudent.id).then(updatedStudent => {
        setStudents(
          students.map(student => {
            if (student.id === updatedStudent.id) {
              return updatedStudent;
            }
            return student;
          })
        );
      });
    });
  };

  const handleCreation = newStudent => {
    studentController.create(newStudent).then(id => {
      if (id !== undefined) {
        studentController.get(id).then(student => {
          setStudents([...students, student]);
        });
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
