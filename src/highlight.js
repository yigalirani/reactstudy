import React from 'react';
function make_re(pattern){
    pattern=pattern.trim()
    if (!pattern)
        return null
    try{
        return new RegExp("(" + pattern+ ")", "gi");
    }catch(ex){
        return null
    }
}
function concat(words){
    function f(x,i){
        if (i%2==0)
            return x
        return <b>{x}</b>
    }
    return words.map(f)
}
function split(re,value){
    if (!re)
        return [value]
    return value.split(re)
}
function Marker({re,value}){
    var words=split(re,value)
    return concat(words)
}
function Highlight(){
    var [pattern,set_pattern]=React.useState('')
    var [value,set_value]=React.useState('The quick brown fox jumps over the lazy dog')
    var re=make_re(pattern)
    var words=split(re,value)
    return <>
        patten
        <Input value={pattern} set_value={set_pattern}/>
        value
        <Input {...{value,set_value}}/>
        {words.length}
        <ol>
            {words.map(x=><li>{x}</li>)}
        </ol>
        <Marker {...{re,value}}/>
        
    </>    
}