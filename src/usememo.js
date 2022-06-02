import React from 'react';
export function Memo(){
  var [a,set_a]=React.useState(0)
  var [b,set_b]=React.useState(10)
  function onClick(){
    set_a(a+1)
    set_b(b+1)
  }
  var c=React.useMemo(()=>a+b,[a])
  return <div>
    {a}+{b}={c}
    <button {...{onClick}}>click{a}</button>
  </div>
}