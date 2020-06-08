import Axios from 'axios';

export const setAuthorizationToken = (token) => {
  if (token) {
    localStorage.setItem('_s', token);
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
