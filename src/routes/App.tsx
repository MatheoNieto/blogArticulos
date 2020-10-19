import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'

const App: React.FC = () => (
  
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default App;
