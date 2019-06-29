import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Mylabel, Lister } from './lister.js'
import { Game } from './game.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Tiker() {
  var [count, setCount] = useState(0);
  function tick() {
    console.log('tick', count)
    setCount(count => count + 1)
  }
  useEffect(() => {
    var timerID = setInterval(_=>
      setCount(count=>count+1)//setCount(count+1) wont work
    , 1000);
    console.log('setinterval', count)

    return function cleanup() {
      clearInterval(timerID);
      console.log('clearinterval')
    };
  }, [count]);
  return <div>
      this is ticker   
      <button onClick={() => 
        setCount(count + 1)//setCount(count+1) does work
      }>up </button>
      {count}
      </div>
}

class ClassTiker extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    setInterval(_ => this.setState({ count: this.state.count + 1 }), 1000)
    console.log('ClassTiker:componentDidMount')
  }

  render() {
    return <span>this is classticker{this.state.count}</span>
  }
}
var  MyDiv = ({children}) => <div className='high'> {children} {children}</div>
function Index() {
  return <MyDiv><h2>Home</h2>
    <Tiker />
  </MyDiv>
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

class AppRouter extends React.Component {

  render() {
    return <Router>eee{this.props.r.map(x=>x)}
      <ul>
        <li>
          <Link to="/">Home</Link><Example />
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
//{Index,Game,Lister }
ReactDOM.render(
  <AppRouter r={['Index','Game','Lister' ]}/>
  ,
  document.getElementById('root')
);
