import React from 'react';
export function useChanged(name,value){
  function print_it(){
    console.log('changed',name)
  }
  React.useMemo(print_it,[value])
}

export function Child({
    f,
    val={name:4} 
  }){
  var [s,set_d]=React.useState(null)
  useChanged('f',f)
  console.log('render')
  return <div>child{f()}{val.name}</div>
}
export function FunctionProps(){
  var [count,set_count]=React.useState(1)
  function f(){
    return 'yigl'
  }
  function onClick(){
    set_count(count+1)
  }
  return <div>{count}<button {...{onClick}} >blick</button><Child {...{f}}/></div>
} 