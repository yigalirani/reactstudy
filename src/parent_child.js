import React from 'react';
function Child({lookup}){
    var [count,set_count]=React.useState(0)
    function diff(){
        set_count(count+1)
    }
    lookup.diff=diff
    return <div>{count}</div>
}

function Parent(){
    var [lookup,set_lookup]=React.useState({})
    return <div>
        <Child {...{lookup}}/>
        <button onClick={_=>lookup.diff(1)}>up</button>
    </div>
}
ReactDOM.render(<Parent />,document.querySelector('#root') );