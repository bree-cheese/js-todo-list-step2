import { API } from './api.js';

const User = {
  createUser: username => API.post(`/api/users`, { name: username }),
  getUser: userId => API.get(`/api/users/${userId}`),
  getUserList: () => API.get(`/api/users`),
  deleteUser: userId => API.delete(`/api/users/${userId}`),
};

export { User };
