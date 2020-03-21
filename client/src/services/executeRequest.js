const API_ROOT = 'http://localhost:8080';

const executeRequest = (endpoint, rest) =>
  new Promise(resolve =>
    fetch(`${API_ROOT}${endpoint}`, {
      ...rest
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then(data => resolve(data))
      .catch(error => {
        if (error.ok !== undefined) {
          error.text().then(errorMessage => {
            alert(errorMessage);
          });
        }
      })
  );

export default executeRequest;
