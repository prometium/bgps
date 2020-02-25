const API_ROOT = 'http://localhost:8080';

const executeRequest = (endpoint, rest) => {
  return fetch(`${API_ROOT}${endpoint}`, {
    ...rest
  })
    .then(response => {
      if (!response.ok) {
        throw response;
      } else {
        return response.json();
      }
    })
    .catch(error => {
      if (error.ok !== undefined) {
        error.text().then(errorMessage => {
          alert(errorMessage);
          console.error(errorMessage);
        });
      }
    });
};

export default executeRequest;
