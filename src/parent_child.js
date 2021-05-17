import React from 'react';
function Child({lookup}){
    var [count,set_count]=React.useState(0)
    function diff(){
        set_count(count+1)
    }
    lookup.diff=diff
    return <div>{count}</div>
}

export function Parent(){
    var [lookup,set_lookup]=React.useState({})
    return <div>
        <Child {...{lookup}}/>
        <button onClick={()=>lookup.diff(1)}>up</button>
    </div>
}
