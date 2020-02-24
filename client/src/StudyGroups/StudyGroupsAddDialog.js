import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import useForm from 'src/hooks/useForm';

function StudyGroupsAddDialog({
  show,
  handleClose,
  handleSubmit: handleSubmitProp
}) {
  const { inputs, handleChange, handleSubmit } = useForm(
    {
      name: ''
    },
    () => {
      handleSubmitProp(inputs);
    }
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="study-groups-add-form" onSubmit={handleSubmit}>
          <Form.Label>Название</Form.Label>
          <Form.Control
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
        <Button
          type="submit"
          form="study-groups-add-form"
          variant="primary"
          onClick={handleClose}
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudyGroupsAddDialog;
