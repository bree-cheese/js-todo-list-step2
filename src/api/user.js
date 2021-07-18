import { API } from './api.js';

const UserApi = {
  createUser: username => API.post(`/api/users`, { name: username }),
  getUser: userId => API.get(`/api/users/${userId}`),
  getUserList: () => API.get(`/api/users`),
  deleteUser: userId => API.delete(`/api/users/${userId}`),
};

export default UserApi;
