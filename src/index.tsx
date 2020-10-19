import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './routes/App'
import './assets/styles/main.scss'

import store from './store/index';

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('app')
);
