import React from 'react';
export function Before(){
  var [value,set_value]=React.useState(3)
    function onChange(e){
      set_value(e.target.value)
    }
    var int_value=parseInt(value) || 0
    var before_vals=Array(int_value).fill(1).map((x,i)=><li key={i}>{i}sdfsdf</li>)
    return <><ol>{before_vals}</ol>{int_value}<input  type="text" {...{value,onChange}} /></>
}