
function Tiker() {
    var [count,setCount]=React.useState(0);

    React.useEffect(()=>{
        var timerID=setInterval(_=>setCount(count=>count+1) //setCount(count+1) wont work.after frw months: great comment!
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
function make_csv(){
  var ans='value1,value2\n'
  return ans+[...Array(50000).keys()].map(x=>'long text for testing the download function the goal is to see that it is possible to download a lot'+x+','+(x+2)).join('\n')
}
function  Download(){
  return <a href={"data:text/csv;charset=utf-8,"+encodeURIComponent(make_csv())} download='data.csv'> download it </a>
}

function MyRouter({ routes,home }) {
    const get_hash=_=>window.location.hash.substr(1)
    var [hash,setHash]=React.useState(get_hash());
    var path=hash.split('/')
    function subsribe_to_hash(){
      function the_listener(){setHash(get_hash())}
      window.addEventListener("hashchange",the_listener)
      return _=>window.removeEventListener("hashchange",the_listener)
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
//{Index,Game,Lister }
ReactDOM.render(<MyRouter home={Index} routes={{ Index,Parent,ModalPage,ModalPage2,ContextDemo,ContextDemoProp,Game,Lister,Svgdemo,Download,InputColor,InputColorP,ColorGrid}} />,document.getElementById('root'));
//<AppRouter r={['Index','Game','Lister' ]}/>