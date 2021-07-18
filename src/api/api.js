const baseURL = 'https://js-todo-list-9ca3a.df.r.appspot.com';

const API = {
  get: async uri => {
    const res = await fetch(`${baseURL}${uri}`, { method: 'GET' });
    return await res.json();
  },
  post: async (uri, data) => {
    const res = await fetch(`${baseURL}${uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    return await res.json();
  },

  put: async (uri, data) => {
    const res = await fetch(`${baseURL}${uri}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    return await res.json();
  },

  delete: async uri => {
    const res = await fetch(`${baseURL}${uri}`, { method: 'DELETE' });
    return await res.json();
  },
};

export { API };
