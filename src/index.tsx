import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'store';
import './index.css';
import App from 'app';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'; // TODO: (clogic) baseURL은 configuration따라 바뀌도록 수정해야함
axios.defaults.withCredentials = true;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
serviceWorker.unregister();
