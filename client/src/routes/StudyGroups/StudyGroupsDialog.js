import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function StudyGroupsDialog({
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
        <Form id="study-groups-form" onSubmit={handleSubmit}>
          <Form.Group controlId="study-groups-name">
            <Form.Label>Название</Form.Label>
            <Form.Control
              name="name"
              value={inputs.name}
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
          form="study-groups-form"
          variant="primary"
          onClick={handleClose}
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudyGroupsDialog;
