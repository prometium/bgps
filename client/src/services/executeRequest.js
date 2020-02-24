const API_ROOT = 'http://localhost:8080';

const executeRequest = (endpoint, rest) => {
  return fetch(`${API_ROOT}${endpoint}`, {
    ...rest
  }).then(response => {
    if (response.ok) {
      return response;
    }

    response.text().then(text => {
      throw Error(text);
    });
  });
};

export default executeRequest;
