import API from './api';

const Todo = {
  getItems: async userId => await API(`/api/users/${userId}}/items/`),
  addItem: async (userId, data) =>
    await API(`/api/users/${userId}}/items/`, 'POST', data),
  deleteItemAll: async userId =>
    await API(`/api/users/${userId}}/items/`, 'DELETE'),
  deleteItem: async (userId, itemId) =>
    await API(`/api/users/${userId}}/items/${itemId}`, 'DELETE'),
  editItem: async (userId, itemId, data) =>
    await API(`/api/users/${userId}}/items/${itemId}`, 'PUT', data),
  setItemPriority: async (userId, itemId, data) =>
    await API(`/api/users/${userId}}/items/${itemId}/priority`, 'PUT', data),
  toggleItem: async (userId, itemId) =>
    await API(`/api/users/${userId}}/items/${itemId}/toggle`, 'PUT'),
};

export { Todo };
