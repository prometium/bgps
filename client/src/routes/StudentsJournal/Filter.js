import React from 'react';

import { Form } from 'react-bootstrap';

function Filter({ studyGroups, inputs, handleChange }) {
  return (
    <Form>
      <Form.Group controlId="study-groups">
        <Form.Label>Группы</Form.Label>
        <Form.Control
          name="study_group_id"
          as="select"
          onChange={handleChange}
          value={inputs.study_group_id}
        >
          <option value={-1}>*</option>
          {studyGroups.map(studyGroup => (
            <option key={studyGroup.id} value={studyGroup.id}>
              {studyGroup.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="sort-options">
        <Form.Label>Сортировка</Form.Label>
        <Form.Control
          name="sort_option"
          as="select"
          onChange={handleChange}
          value={inputs.sort_option}
        >
          <option value={0}>По алфавиту</option>
          <option value={1}>По убыванию оценок</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default Filter;
