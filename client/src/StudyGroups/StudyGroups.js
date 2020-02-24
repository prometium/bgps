import React, { Fragment } from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';
import StudyGroupsEditDialog from './StudyGroupsEditDialog';
import StudyGroupsAddDialog from './StudyGroupsAddDialog';

function StudyGroups({
  studyGroups,
  handleDelete,
  handleUpdate,
  handleCreation
}) {
  const [editableStudyGroup, setEditableStudyGroup] = React.useState();

  const [show1, setShow1] = React.useState(false);

  const handleClose1 = () => setShow1(false);

  const handleShow1 = studyGroup => () => {
    setShow1(true);
    setEditableStudyGroup(studyGroup);
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
            <th>Название</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {studyGroups.map(studyGroup => (
            <tr key={studyGroup.id}>
              <td>{studyGroup.id}</td>
              <td>{studyGroup.name}</td>
              <td>
                <ButtonGroup>
                  <Button onClick={handleShow1(studyGroup)}>
                    Редактировать
                  </Button>
                  <Button
                    onClick={handleDelete(studyGroup.id)}
                    variant="danger"
                  >
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
        style={{ position: 'absolute', bottom: 24, right: 24 }}
      >
        Создать
      </Button>
      <StudyGroupsEditDialog
        show={show1}
        handleClose={handleClose1}
        studyGroup={editableStudyGroup}
        handleSubmit={handleUpdate}
      />
      <StudyGroupsAddDialog
        show={show2}
        handleClose={handleClose2}
        handleSubmit={handleCreation}
      />
    </Fragment>
  );
}

export default StudyGroups;
