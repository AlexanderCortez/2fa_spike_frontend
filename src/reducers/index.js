import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import TwoStepReducer from './TwoStepReducer';

export default combineReducers({
  AppReducer,
  TwoStepReducer,
});
