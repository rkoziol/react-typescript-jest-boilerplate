import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Hello from '@components/Hello';
import World from '@components/World';

import './App.scss';

export const App = (): JSX.Element => (
  <div className="componentWrapper">
    <h2>Hello App</h2>
    <BrowserRouter>
      <nav className="routingWrapper">
        <b>Routing: </b>
        <Link to="/">Hello component</Link>
        <Link to="/world">World component</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/world" element={<World />} />
      </Routes>
    </BrowserRouter>
  </div>
);
