import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
)