import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

// User 
export const getUsers = () => API.get('/users/users');
export const createUser = (userData) => API.post('/users/users', userData);
export const deleteUser = (id) => API.delete(`/users/users/${id}`);

// Post 
export const getPosts = () => API.get('/posts/posts');
export const createPost = (postData) => API.post('/posts/post', postData);
export const deletePost = (id) => API.delete(`/posts/posts/${id}`);

export default API;
