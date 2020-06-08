import axios from 'axios';

export const signUp = (data) => () => axios
  .post('/auth/signup', data)
  .then((response) => response.data)
  .catch((err) => Promise.reject(err.response.data));
