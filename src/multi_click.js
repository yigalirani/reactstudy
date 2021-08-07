import React from 'react';

export function MultiClick(){
  var [count,set_count]=React.useState(1)
  function onClick(){
    set_count(count+1)
  }
  return <table {...{onClick}}>
    <tbody>
    <tr><td{...{onClick}}>{1+count}</td><td>{2+count}</td></tr>
    <tr><td>{3+count}</td><td>{4+count}</td></tr>
    </tbody>
  </table>
}