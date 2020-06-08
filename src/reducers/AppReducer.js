import { SIGN_IN_SUCCESSFULL, SET_LOGGED } from '../actionTypes/appActionTypes';

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
  return state;
};

export default AppReducer;
