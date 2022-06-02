import React from 'react';
import {Input} from './pair_test.js'
function Node({depth}){
  var [count,set_count]=React.useState(1)
  function onClick(){
    set_count(count+1)
  }
  function make_clicker(){
    return <button {...{onClick}}>{count}</button>
  }
  if (depth<=0)
    return make_clicker()
  depth--
  
  return <div>{make_clicker()}<ul>
    <li><Node {...{depth}}/></li>
    <li><Node {...{depth}}/></li>
  </ul></div>
}
export function Reqursive(){
  var [value,set_value]=React.useState('1')
  var depth=Math.min(parseInt(value)||1,10)
  return <>
    <Input {...{value,set_value}}/>{depth}
    <Node {...{depth}}/>
  </>

}