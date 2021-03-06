import React from 'react';
export function State(){
  var [msg,set_msg]=React.useState("hello") //not rendered, just to force render
  var [data,set_data]=React.useState({version:1})
  function onClick(){
    set_msg(x=>x+'x') //just to force render
    data.version+=1   //changing state in place, but it still updates
  }
  return <div>
    version={data.version}{msg}
    <button {...{onClick}}>click</button>
  </div>
}
