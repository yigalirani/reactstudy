import React from 'react';
function TheNull(){
  return null
}
export function NullElement(){
  return <ol>
    <li>first</li>
    <li>second</li>
    <TheNull/>
  </ol>
}