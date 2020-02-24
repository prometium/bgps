import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import useForm from 'src/hooks/useForm';

function StudentsAddDialog({
  show,
  handleClose,
  handleSubmit: handleSubmitProp
}) {
  const { inputs, handleChange, handleSubmit } = useForm(
    {
      surname: '',
      name: '',
      second_name: '',
      study_group_id: 0
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
        <Form id="students-add-form" onSubmit={handleSubmit}>
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            name="surname"
            value={inputs.surname}
            onChange={handleChange}
          />
          <Form.Label>Имя</Form.Label>
          <Form.Control
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
          <Form.Label>Отчество</Form.Label>
          <Form.Control
            name="second_name"
            value={inputs.second_name}
            onChange={handleChange}
          />
          <Form.Label>Id группы</Form.Label>
          <Form.Control
            name="study_group_id"
            value={inputs.study_group_id}
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
          form="students-add-form"
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
