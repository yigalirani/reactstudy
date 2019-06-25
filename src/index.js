import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Mylabel,Lister} from './lister.js'
import {Game} from './game.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Tiker(){
  const [count, setCount] = useState(0);
  setInterval(_=>setCount(count+1),1000)
  return <span>this is ticker{count}</span>
}

function Index() {
  return <div><h2>Home</h2><Tiker/></div>
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        up
      </button>
      <button onClick={() => setCount(count - 1)}>
        down
      </button>
    </div>
  );
}
//function Menu(props):

class AppRouter  extends React.Component {

  render() {
    return <Router>
          <ul>
            <li>
              <Link to="/">Home</Link><Example/>
            </li>
            <li>
              <Link to="/game/">Game</Link>
            </li>
            <li>
              <Link to="/lister/">Lister</Link>
            </li>
          </ul>

        <Route path="/" exact component={Index} />
        <Route path="/game/" component={Game} />
        <Route path="/lister/" component={Lister} />
    </Router>
  }
}

ReactDOM.render(
    <AppRouter />
  ,
  document.getElementById('root')
);
