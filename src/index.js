import React from 'react';
import ReactDOM from 'react-dom'
import {SetStateFromRender} from './setstate_from_render.js'
import {State} from './state.js'
import {CheckboxTest} from './checkbox.js'
import {Highlight} from './highlight.js'
import {Clickers} from './clicker.js'
import {Sequence} from './sequence.js'
import {GroupTest} from './group.js'
import {TabsPage} from './tabs.js'
import {Parent} from './parent_child.js'
import {Parent2} from './parent_child2.js'
import {ModalPage} from './modal.js'
import {ModalPage2} from './modal2.js'
import {ContextDemo} from './context.js'
import {ContextDemoProp} from './context.js'
import {Game} from './game.js'
import {Lister} from './lister.js'
import {Svgdemo} from './svg.js'
import {InputColor} from './color_grid.js'
import {InputColorP} from './pair_test.js'
import {ColorGrid} from './color_grid.js'
import {Reqursive} from './reqursive.js'
function useTiker() {
    var [count,setCount]=React.useState(0);

    React.useEffect(()=>{
        var timerID=setInterval(()=>setCount(count=>count+1) //setCount(count+1) wont work.after frw months: great comment!
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
    {useTiker()}
    <Diff/>
  </MyDiv>
}
function Label({title}){
  return <h1>{title}</h1>
}
function  useLabel({title}){
  return <h1> {title}</h1>
}
function Diff(){
  return <div>
    <Label title='this is component'/>
    {useLabel({title:'this is custum hook'})}
    </div>
}
function eq(a,b) {
    return a.toLowerCase()===b.toLowerCase()
}
function make_csv(){
  var ans='value1,value2\n'
  return ans+[...Array(50000).keys()].map(x=>'long text for testing the download function the goal is to see that it is possible to download a lot'+x+','+(x+2)).join('\n')
}
function  Download(){
  return <a href={"data:text/csv;charset=utf-8,"+encodeURIComponent(make_csv())} download='data.csv'> download it </a>
}

function MyRouter({ routes,home }) {
    const get_hash=()=>window.location.hash.substr(1)
    var [hash,setHash]=React.useState(get_hash());
    var path=hash.split('/')
    function subsribe_to_hash(){
      function the_listener(){setHash(get_hash())}
      window.addEventListener("hashchange",the_listener)
      return ()=>window.removeEventListener("hashchange",the_listener)
    }
    React.useEffect(subsribe_to_hash,[])
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

ReactDOM.render(<MyRouter home={Index} routes={{Index,Reqursive,SetStateFromRender,State,CheckboxTest,Highlight,Clickers,
  Sequence,GroupTest,TabsPage,Parent,Parent2,ModalPage,ModalPage2,ContextDemo,ContextDemoProp,Game,Lister,Svgdemo,Download,InputColor,InputColorP,ColorGrid}} />,document.getElementById('root'));
//<AppRouter r={['Index','Game','Lister' ]}/>