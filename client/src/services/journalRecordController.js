import executeRequest from './executeRequest';

const journalRecordController = {
  create: student =>
    executeRequest('/journal', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    }),
  get: id => executeRequest(`/journal/${id}`),
  getAll: () => executeRequest('/journal'),
  getAllByStudyGroup: id => executeRequest(`/journal/study_group/${id}`),
  update: (id, student) =>
    executeRequest(`/journal/${id}`, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    }),
  delete: id => executeRequest(`/journal/${id}`, { method: 'DELETE' })
};

export default journalRecordController;
