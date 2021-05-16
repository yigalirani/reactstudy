import React from 'react';
function Checkbox({checked,set_checked}){
  function Box({fill="transparent",stroke="black"}){
    return <path d="M 2 2 L 30 2 L 30 30 L 2 30 z" {...{fill,stroke}} strokeWidth="2"/>
  }
  function Check(){
    return <path d="M 6 20 L 12 26 L 26 6" fill="transparent" stroke="white" strokeWidth="4"/>
  }  
  function Indeterminate(){
    return <path d="M 6 16 H 24" fill="transparent" stroke="black" strokeWidth="2"/>
  }
  if (checked==null){
    return <svg   onClick={()=>set_checked(true)} viewBox="0 0 32 32" height='1em' >
      <Box/><Indeterminate/>
    </svg>
  }
  if (checked){
    return<svg  onClick={()=>set_checked(false)} viewBox="0 0 32 32" height='1em' >
      <Box fill="blue" stroke="transparent"/><Check/>
    </svg>
  }
  return <svg    onClick={()=>set_checked(true)} viewBox="0 0 32 32" height='1em' >
    <Box/>
  </svg>
 }

export function CheckboxTest(){
  var [checked,set_checked]=React.useState(null) 
  return <div>
    <Checkbox {...{checked,set_checked}}/>
    <input type="checkbox" checked/>
    <input type="checkbox" />
    <input type="checkbox" checked='checked'/>
  </div>
}