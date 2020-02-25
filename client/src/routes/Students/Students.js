import React, { Fragment } from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';
import StudentsEditDialog from './StudentsEditDialogContainer';
import StudentsAddDialog from './StudentsAddDialogContainer';

function Students({ students, handleDelete, handleUpdate, handleCreation }) {
  const [editableStudent, setEditableStudent] = React.useState();

  const [show1, setShow1] = React.useState(false);

  const handleClose1 = () => setShow1(false);

  const handleShow1 = student => () => {
    setShow1(true);
    setEditableStudent(student);
  };

  const [show2, setShow2] = React.useState(false);

  const handleClose2 = () => setShow2(false);

  const handleShow2 = () => {
    setShow2(true);
  };

  return (
    <Fragment>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>ФИО</th>
            <th>Группа</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{`${student.surname} ${student.name} ${student.second_name}`}</td>
              <td>{student.study_group}</td>
              <td>
                <ButtonGroup>
                  <Button onClick={handleShow1(student)}>Редактировать</Button>
                  <Button onClick={handleDelete(student.id)} variant="danger">
                    Удалить
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        onClick={handleShow2}
        style={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        Создать
      </Button>
      <StudentsEditDialog
        show={show1}
        handleClose={handleClose1}
        student={editableStudent}
        handleSubmit={handleUpdate}
      />
      <StudentsAddDialog
        show={show2}
        handleClose={handleClose2}
        handleSubmit={handleCreation}
      />
    </Fragment>
  );
}

export default Students;
