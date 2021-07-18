const baseURL = 'https://js-todo-list-9ca3a.df.r.appspot.com';

const API = async (uri, method = 'GET', data = null) => {
  if ((method === 'POST') | 'PUT') {
    return await fetch(`${baseURL}${uri}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
  return await fetch(`${baseURL}${uri}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { API };
