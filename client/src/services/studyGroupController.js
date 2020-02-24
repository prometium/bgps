import executeRequest from './executeRequest';

const studyGroupController = {
  create: studyGroup =>
    executeRequest('/study_groups', {
      method: 'POST',
      body: JSON.stringify(studyGroup),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()),
  getAll: () =>
    executeRequest('/study_groups').then(response => response.json()),
  update: (id, studyGroup) =>
    executeRequest(`/study_groups/${id}`, {
      method: 'PUT',
      body: JSON.stringify(studyGroup),
      headers: {
        'Content-Type': 'application/json'
      }
    }),
  delete: id => executeRequest(`/study_groups//${id}`, { method: 'DELETE' })
};

export default studyGroupController;
