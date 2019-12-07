import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Lister } from './lister.js'
import { Game } from './game.js'
import styled from 'styled-components'

const Button=styled.a`
  background-color:red;
  color:white;
`
const Border=styled.div`
  border:3px dashed green;
`

function Styled(){
  return <Border><Button style={ {padding:15,margin:20,display:'inline-block'} }href="/">root</Button></Border>
}
function Outer({text='d',count=10}){
  function Inner({i}){
    return <div>{text+i}</div>
  }
  return <div>{[...Array(count).keys()].map(i=><Inner key={i}{...{i}}/>)}</div>
}

function Tiker() {
    var [count,setCount]=useState(0);

    useEffect(()=>{
        var timerID=setInterval(_=>setCount(count=>count+1) //setCount(count+1) wont work
            ,1000);
        console.log('setinterval',count)
        return function cleanup() {
            clearInterval(timerID);
            console.log('clearinterval')
        };
    },[]);
    return <div>
    this is ticker
      <button onClick={() =>
      setCount(count+1)//setCount(count+1) does work
    }>up </button>
    {count}
  </div>
}

var MyDiv=({ children })=><div className='high'> {children} {children}</div>

function Index() {
    return <MyDiv><h2>Home</h2>
    <Tiker />
  </MyDiv>
}


function eq(a,b) {
    return a.toLowerCase()===b.toLowerCase()
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
//{Index,Game,Lister }
ReactDOM.render(<MyRouter home={Index} routes={{ Index,Game,Lister,Outer,Styled }} />,document.getElementById('root'));
//<AppRouter r={['Index','Game','Lister' ]}/>