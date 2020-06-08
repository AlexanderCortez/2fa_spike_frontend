import axios from 'axios';
import { getAction } from './appActions';
import { GENERATE_QR_SUCCESS, DISABLE_TWO_STEP } from '../actionTypes/twoFactorActionTypes';

export const generateQR = () => (dispatch) => axios
  .post('/two-factor/generate')
  .then((response) => {
    const { data } = response.data;
    dispatch(getAction(GENERATE_QR_SUCCESS, data.qrImage));
  })
  .catch((err) => Promise.reject(err.response.data));

export const activateTwoStep = (token) => axios
  .post('/two-factor/activate', { token })
  .catch((err) => Promise.reject(err.response.data));

export const deactivateTwoStep = () => (dispatch) => axios
  .post('/two-factor/deactivate')
  .then(() => dispatch(generateQR()))
  .then(() => {
    dispatch(getAction(DISABLE_TWO_STEP));
  })
  .catch((err) => Promise.reject(err.response.data));

export const validateTwoStepToken = (token, accessToken) => () => axios
  .post('/two-factor/validate',
    { token }, { headers: { Authorization: `Bearer ${accessToken}` } })
  .then(() => {

  })
  .catch((err) => Promise.reject(err.response.data));
