import Axios from 'axios';
import store from '../store';
import { setAuthorizationToken } from './setAuthorizationToken';
import { getAction } from '../actions/appActions';
import { SIGN_IN_SUCCESSFULL, SET_LOGGED } from '../actionTypes/appActionTypes';

export const checkToken = () => new Promise((resolve, reject) => {
  const token = localStorage.getItem('_s');
  if (token) {
    setAuthorizationToken(token);
    Axios.post('/auth/check-session-token')
      .then((response) => {
        const { data } = response.data;
        store.dispatch(getAction(SIGN_IN_SUCCESSFULL, data));
        store.dispatch(getAction(SET_LOGGED));
        resolve(response.data);
      })
      .catch(() => {
        localStorage.removeItem('_s');
        reject();
      });
  } else {
    reject();
  }
});
