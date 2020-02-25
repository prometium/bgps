import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function StudentsAddDialog({
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
        <Form id="students-form" onSubmit={handleSubmit}>
          <Form.Group controlId="students-surname">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              name="surname"
              value={inputs.surname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="students-name">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="students-second-name">
            <Form.Label>Отчество</Form.Label>
            <Form.Control
              name="second_name"
              value={inputs.second_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="students-study-group-id">
            <Form.Label>Id группы</Form.Label>
            <Form.Control
              name="study_group_id"
              value={inputs.study_group_id}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
        <Button
          type="submit"
          form="students-form"
          variant="primary"
          onClick={handleClose}
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentsAddDialog;
