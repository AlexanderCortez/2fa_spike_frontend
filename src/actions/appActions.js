import axios from 'axios';
import { SIGN_IN_SUCCESSFULL, SET_LOGGED } from '../actionTypes/appActionTypes';
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';

export const getAction = (type, payload) => ({
  type,
  payload,
});

export const signUp = (data) => () => axios
  .post('/auth/signup', data)
  .then((response) => response.data)
  .catch((err) => Promise.reject(err.response.data));

export const signIn = (params) => (dispatch) => axios
  .post('/auth/signin', params)
  .then((response) => {
    const { data } = response.data;
    dispatch(getAction(SIGN_IN_SUCCESSFULL, data.user));
    dispatch(getAction(SET_LOGGED));
    setAuthorizationToken(data.accessToken);
    return data;
  })
  .catch((err) => Promise.reject(err.response.data));
