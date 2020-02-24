import executeRequest from './executeRequest';

const journalRecordController = {
  create: student =>
    executeRequest('/journal', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  //   getAll: resolve => executeRequest('/students', resolve),
  //   getAllByGroup: (groupId, resolve) =>
  //     executeRequest(`/students/study_group/${groupId}`, resolve),
  //   update: (id, student, resolve) =>
  //     executeRequest(`/students/${id}`, resolve, {
  //       method: 'PUT',
  //       body: JSON.stringify(student),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }),
  //   delete: (id, resolve) =>
  //     executeRequest(`/students/${id}`, resolve, { method: 'DELETE' })
};

export default journalRecordController;
