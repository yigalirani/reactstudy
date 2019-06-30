import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Mylabel,Lister } from './lister.js'
import { Game } from './game.js'
import { BrowserRouter as Router,Route,Link } from "react-router-dom";

function Tiker() {
    var [count,setCount]=useState(0);

    function tick() {
        console.log('tick',count)
        setCount(count=>count+1)
    }
    useEffect(()=>{
        var timerID=setInterval(_=>setCount(count=>count+1) //setCount(count+1) wont work
            ,1000);
        console.log('setinterval',count)
        return function cleanup() {
            clearInterval(timerID);
            console.log('clearinterval')
        };
    },[count]);
    return <div>
    this is ticker
      <button onClick={() =>
      setCount(count+1)//setCount(count+1) does work
    }>up </button>
    {count}
  </div>
}
class ClassTiker extends React.Component {
    constructor() {
        super()
        this.state={
            count: 0
        };
    }
    componentDidMount() {
        setInterval(_=>this.setState({ count: this.state.count+1 }),1000)
        console.log('ClassTiker:componentDidMount')
    }
    render() {
        return <span>this is classticker{this.state.count}</span>
    }
}
var MyDiv=({ children })=><div className='high'> {children} {children}</div>

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
    // Declare a new state variable,which we'll call "count"
    const [count,setCount]=useState(0);
    return (<div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>
        up
      </button>
      <button onClick={()=>setCount(count-1)}>
        down
      </button>
    </div>);
}

function eq(a,b) {
    return a.toLowerCase()==b.toLowerCase()
}

function MyRouter({ routes,home }) {
    const get_hash=_=>window.location.hash.substr(1)
    var [hash,setHash]=useState(get_hash());
    var path=hash.split('/')
    function subsribe_to_hash(){
      function the_listener(){setHash(get_hash())}
      window.addEventListener("hashchange",the_listener)
      return _=>window.removeEventListener("hashchange",the_listener)
    }
    useEffect(subsribe_to_hash,[])
    function Choose() {
        for(const [name,Component] of Object.entries(routes)) {
            if(eq(name,path[0])) {
                console.log(name)
                return <Component/>
            }
        }
        var Home=home
        return <Home/>
    }
    function calc_cls(x){
      if (eq(x,path[0]))
        return 'selected'
      return ''
    }
    function Menu(){
      return <div className='menu'>{Object.keys(routes).map(x=><a key={x} className={calc_cls(x)} href={'#'+x}>{x}</a>)}</div>
    }
    return <div><Menu/><Choose/></div>
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
ReactDOM.render(<MyRouter home={Index} routes={{ Index,Game,Lister }} />,document.getElementById('root'));
//<AppRouter r={['Index','Game','Lister' ]}/>