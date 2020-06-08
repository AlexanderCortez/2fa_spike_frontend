import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const { NODE_ENV } = process.env;

const url = NODE_ENV === 'production'
  ? ''
  : 'http://localhost:3000/';

axios.defaults.baseURL = url;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
