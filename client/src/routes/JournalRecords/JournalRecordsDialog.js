import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function JournalRecordsDialog({
  show,
  handleClose,
  inputs,
  handleChange,
  handleSubmit
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление / Редактирование</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="journal-form" onSubmit={handleSubmit}>
          <Form.Group controlId="journal-student-id">
            <Form.Label>Id студента</Form.Label>
            <Form.Control
              name="student_id"
              value={inputs.student_id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="journal-study-plan-id">
            <Form.Label>Id учебного плана</Form.Label>
            <Form.Control
              name="study_plan_id"
              value={inputs.study_plan_id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="journal-in-time">
            <Form.Check
              name="in_time"
              type="checkbox"
              id={`journal-in-time-checkbox`}
              label="Вовремя"
              checked={inputs.in_time}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="journal-count">
            <Form.Label>Количество пересдач</Form.Label>
            <Form.Control
              name="count"
              value={inputs.count}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="journal-mark-id">
            {/* <Form.Label>Id_оценки</Form.Label>
            <Form.Control
              name="mark_id"
              value={inputs.mark_id}
              onChange={handleChange}
            /> */}
            <Form.Label>Оценка</Form.Label>
            <Form.Control
              name="mark_id"
              as="select"
              onChange={handleChange}
              value={inputs.mark_id}
            >
              <option value="1">Отлично</option>
              <option value="2">Хорошо</option>
              <option value="3">Удовлетворительно</option>
              <option value="4">Неудовлетворительно</option>
              <option value="5">Зачет</option>
              <option value="6">Незачет</option>
              <option value="7">Неявка</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
        <Button
          type="submit"
          form="journal-form"
          variant="primary"
          onClick={handleClose}
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JournalRecordsDialog;
