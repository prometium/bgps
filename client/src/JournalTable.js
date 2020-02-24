import React from 'react';

import { Table } from 'react-bootstrap';

function JournalTable({ students }) {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>ФИО</th>
          <th>ПрИС</th>
          <th>СИИ</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.markPrIS}</td>
            <td>{student.markSII}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default JournalTable;
