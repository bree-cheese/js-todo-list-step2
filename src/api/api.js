const baseURL = 'https://js-todo-list-9ca3a.df.r.appspot.com';

const API = {
  get: async uri => {
    const data = await fetch(`${baseURL}${uri}`, { method: 'GET' });
    return await data.json();
  },

  post: async (uri, data) => {
    const data = await fetch(`${baseURL}${uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await data.json();
  },

  put: async (uri, data) => {
    const data = await fetch(`${baseURL}${uri}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await data.json();
  },

  delete: async uri => {
    const data = await fetch(`${baseURL}${uri}`, { method: 'DELETE' });
    return await data.json();
  },
};

export { API };
