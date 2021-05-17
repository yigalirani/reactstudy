import React from 'react';
function useMake_child(){
    var [count,set_count]=React.useState(0)
    function diff(){
        set_count(count+1)
    }   
    var child=<div>{count}</div>
    return {diff,child} 
}
export function Parent2(){
    var {child,diff}=useMake_child()
    return <div>
        {child}
        <button onClick={()=>diff(1)}>up</button>
    </div>
}
