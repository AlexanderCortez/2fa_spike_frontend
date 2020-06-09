import { GENERATE_QR_SUCCESS, GENERATE_QR_ERROR } from '../actionTypes/twoFactorActionTypes';
import { SIGN_OUT } from '../actionTypes/appActionTypes';

const initialState = {
  qrImage: '',
  secretKey: '',
  error: null,
};

const TwoStepReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === GENERATE_QR_SUCCESS) {
    return {
      ...state,
      error: null,
      secretKey: payload.secret,
      qrImage: payload.qrImage,
    };
  }
  if (type === GENERATE_QR_ERROR) {
    return {
      ...state,
      error: payload,
    };
  }
  if (type === SIGN_OUT) {
    return initialState;
  }
  return state;
};

export default TwoStepReducer;
