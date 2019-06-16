import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Mylabel,Lister} from './lister.js'
import {Game} from './game.js'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game/">Game</Link>
            </li>
            <li>
              <Link to="/lister/">Lister</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/game/" component={Game} />
        <Route path="/lister/" component={Lister} />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <div>
    <AppRouter />
  </div>
  ,
  document.getElementById('root')
);
