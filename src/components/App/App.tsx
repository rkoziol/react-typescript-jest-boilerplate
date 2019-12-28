import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import style from '@components/App/App.scss';
import { routes } from '@routes/index';

export const App = () => (
  <div className={style.componentWrapper}>
    <Router>
      <h2>Hello App</h2>
      <nav className={style.routingWrapper}>
        <b>Routing: </b>
        <Link to='/'>Hello</Link>
        <Link to='/world'>World</Link>
      </nav>
      <div className={style.routeWrapper}>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </div>
    </Router>
  </div>
);
