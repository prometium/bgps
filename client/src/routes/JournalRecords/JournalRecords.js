import React, { Fragment } from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';
import JournalEditDialog from './JournalRecordsEditDialogContainer';
import JournalAddDialog from './JournalRecordsAddDialogContainer';

function JournalRecords({
  journalRecords,
  handleDelete,
  handleUpdate,
  handleCreation
}) {
  const [editableJournalRecord, setEditableJournalRecord] = React.useState();

  const [show1, setShow1] = React.useState(false);

  const handleClose1 = () => setShow1(false);

  const handleShow1 = journalRecord => () => {
    setShow1(true);
    setEditableJournalRecord(journalRecord);
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
            <th>ФИО студента</th>
            <th>Предмет</th>
            <th>Тип экзамена</th>
            <th>Вовремя</th>
            <th>Оценка</th>
            <th>Пересдач</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {journalRecords.map(journalRecord => (
            <tr key={journalRecord.id}>
              <td>{journalRecord.id}</td>
              <td>{journalRecord.student_full_name}</td>
              <td>{journalRecord.subject_short_name}</td>
              <td>{journalRecord.exam_type}</td>
              <td>{journalRecord.in_time ? 'Да' : 'Нет'}</td>
              <td>{journalRecord.mark_name}</td>
              <td>{journalRecord.count}</td>
              <td>
                <ButtonGroup>
                  <Button onClick={handleShow1(journalRecord)}>
                    Редактировать
                  </Button>
                  <Button
                    onClick={handleDelete(journalRecord.id)}
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
        style={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        Создать
      </Button>
      <JournalEditDialog
        show={show1}
        handleClose={handleClose1}
        journalRecord={editableJournalRecord}
        handleSubmit={handleUpdate}
      />
      <JournalAddDialog
        show={show2}
        handleClose={handleClose2}
        handleSubmit={handleCreation}
      />
    </Fragment>
  );
}

export default JournalRecords;
