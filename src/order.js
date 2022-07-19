import React from 'react';
export function Order(){
  var [order,set_order]=React.useState(true)
  function onClick(){
    set_order(!order)
  }
  if (order){
    return <div>
      <button {...{onClick}}>click</button>
      hello
      <div key='first'>first</div>
      world
      <div key='second'>second</div>
      end
    </div>
  }
  return <div>
      <button {...{onClick}}>click</button>    
    <div key='second'>second</div>
    <div key='first'>first</div>
  </div>  
}