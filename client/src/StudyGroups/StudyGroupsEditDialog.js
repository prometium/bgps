import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import useForm from 'src/hooks/useForm';

function StudyGroupsEditDialog({
  show,
  handleClose,
  studyGroup,
  handleSubmit: handleSubmitProp
}) {
  const { inputs, setInputs, handleChange, handleSubmit } = useForm(
    {
      name: ''
    },
    () => {
      handleSubmitProp({ id: studyGroup.id, ...inputs });
    }
  );

  React.useEffect(() => {
    if (show) {
      setInputs(studyGroup);
    }
  }, [show, setInputs, studyGroup]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="study-groups-edit-form" onSubmit={handleSubmit}>
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
          form="study-groups-edit-form"
          variant="primary"
          onClick={handleClose}
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudyGroupsEditDialog;
