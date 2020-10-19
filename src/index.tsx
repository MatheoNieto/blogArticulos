import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './routes/App'
import './assets/styles/main.scss'

import store from './store/index';

import {config} from './settings'

const client = new ApolloClient({
  uri: `${config.host_name}`,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider
      store={store}
    >
      <App />
    </Provider>
  </ApolloProvider>
  ,
  document.getElementById('app')
);

