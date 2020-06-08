import { SIGN_IN_SUCCESSFULL, SET_LOGGED, SIGN_OUT } from '../actionTypes/appActionTypes';
import { DISABLE_TWO_STEP } from '../actionTypes/twoFactorActionTypes';

const initialState = {
  logged: false,
  currentUser: {},
};

const AppReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === SIGN_IN_SUCCESSFULL) {
    return {
      ...state,
      currentUser: payload,
    };
  }
  if (type === SET_LOGGED) {
    return {
      ...state,
      logged: true,
    };
  }
  if (type === SIGN_OUT) {
    return initialState;
  }
  if (type === DISABLE_TWO_STEP) {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        twoAuthEnabled: false,
      },
    };
  }
  return state;
};

export default AppReducer;
