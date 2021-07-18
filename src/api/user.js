import { API } from './api.js';

const User = {
  createUser: async username =>
    await API(`/api/users`, 'POST', { name: username }),
  getUser: async userId => await API(`/api/users/${userId}`),
  getUserList: async () => await API(`/api/users`),
  deleteUser: async userId => await API(`/api/users/${userId}`, 'DELETE'),
};

export { User };
