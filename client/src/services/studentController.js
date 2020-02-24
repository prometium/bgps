import executeRequest from './executeRequest';

const studentController = {
  create: student =>
    executeRequest('/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()),
  getAll: groupId =>
    executeRequest('/students').then(response => response.json()),
  getAllByGroup: groupId =>
    executeRequest(`/students/study_group/${groupId}`).then(response =>
      response.json()
    ),
  update: (id, student) =>
    executeRequest(`/students/${id}`, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    }),
  delete: id => executeRequest(`/students/${id}`, { method: 'DELETE' })
};

export default studentController;
