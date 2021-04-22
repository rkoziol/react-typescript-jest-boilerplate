import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import style from './App.scss';
import { routes } from '@routes/index';

export const App = (): JSX.Element => (
  <div className={style.componentWrapper}>
    <Router>
      <h2>Hello World from CS501</h2>
      <nav className={style.routingWrapper}>
        <b>Routing: </b>
        <Link to="/">Hello</Link>
        <Link to="/world">World</Link>
      </nav>
      <div>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </div>
    </Router>
  </div>
);
