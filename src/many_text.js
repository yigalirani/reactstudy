import React from 'react';

import {Input} from './pair_test.js'
export function ManyText(){
  const the_max=500
  var [value,set_value]=React.useState('1')
  var [numbers,set_numbers]=React.useState(Array.from({length: the_max}, (x, i) => i))
  var depth=Math.min(parseInt(value)||0,the_max-1)

  function onClick(){
    numbers[depth]++
    set_numbers([...numbers])
  }

  return <>
    <Input {...{value,set_value}}/>{depth}
    <button {...{onClick}}>up</button>
    {numbers.map((x,i)=> <div>{x} </div>)}
    {numbers.map(x=> x+' ' )}    
    </>

}