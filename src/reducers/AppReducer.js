import { SIGN_IN_SUCCESSFULL } from '../actionTypes/appActionTypes';

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
  return state;
};

export default AppReducer;
