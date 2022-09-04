import React from 'react';
function ClickerChangeInner({count,set_count}){
  var onClick=()=>set_count(x=>x+1)
  if (count%3){
    onClick=()=>set_count(x=>x+2)
  }
  return <>{count}<p  onClick={onClick}>click me</p></>  
}
export function ClickerChange(){
  var [count,set_count]=React.useState(1)
  return <ClickerChangeInner {...{count,set_count}}/>

}