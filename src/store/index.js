import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const store = process.env.NODE_ENV === 'production'
  ? createStore(rootReducer, compose(
    applyMiddleware(ReduxThunk),
  ))
  : createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
