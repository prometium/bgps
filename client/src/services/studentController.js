import executeRequest from './executeRequest';

const studentController = {
  create: student =>
    executeRequest('/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    }),
  get: id => executeRequest(`/students/${id}`),
  getAll: () => executeRequest('/students'),
  getAllByGroup: groupId => executeRequest(`/students/study_group/${groupId}`),
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
