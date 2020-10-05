function make_child(){
    var [count,set_count]=React.useState(0)
    function diff(){
        set_count(count+1)
    }   
    var child=<div>{count}</div>
    return {diff,child} 
}
function Parent2(){
    var {child,diff}=make_child()
    return <div>
        {child}
        <button onClick={_=>diff(1)}>up</button>
    </div>
}
