import API from './api';

const TodoApi = {
  getItems: userId => API.get(`/api/users/${userId}}/items/`),
  addItem: (userId, data) => API.post(`/api/users/${userId}}/items/`, data),
  deleteItemAll: userId => API.delete(`/api/users/${userId}}/items/`),
  deleteItem: (userId, itemId) =>
    API.delete(`/api/users/${userId}}/items/${itemId}`),
  editItem: (userId, itemId, data) =>
    API.put(`/api/users/${userId}}/items/${itemId}`, data),
  setItemPriority: (userId, itemId, data) =>
    API.put(`/api/users/${userId}}/items/${itemId}/priority`, data),
  toggleItem: (userId, itemId) =>
    API.put(`/api/users/${userId}}/items/${itemId}/toggle`),
};

export default TodoApi;
