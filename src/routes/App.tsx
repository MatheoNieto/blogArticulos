import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'
import CrearArticulo from '../pages/CrearArticulo'
import RegisterUser from '../pages/RegisterUser'

const App: React.FC = () => (
  
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={RegisterUser} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/createArticulos' component={CrearArticulo} />
          <Route exact path='/createArticulos/:id' component={CrearArticulo} />
          <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default App;
