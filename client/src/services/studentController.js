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
  getAllByGroup: studyGroupId =>
    executeRequest(`/students/study_group/${studyGroupId}`),
  update: (id, student) =>
    executeRequest(`/students/${id}`, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    }),
  transfer: (id, studyGroupId) =>
    executeRequest(`/students/transfer/${id}`, {
      method: 'PUT',
      body: studyGroupId,
      headers: {
        'Content-Type': 'application/json'
      }
    }),
  delete: id => executeRequest(`/students/${id}`, { method: 'DELETE' })
};

export default studentController;
