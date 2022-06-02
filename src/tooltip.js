import React from 'react';
function tooltip(){
  return document.getElementById('tooltip')
}
function ToolTip({msg}){
  const ref=React.useRef();
  function show_tooltip(text,x,y){
    var e=tooltip()
    e.style.left=(x+10)+'px';
    e.style.top=(y+30)+'px';
    e.style.display='block'
    e.innerHTML=text;
  }
  function onMouseEnter() {
    var r=ref.current.getBoundingClientRect()
    show_tooltip(msg,r.x,r.y)

  }
  function onMouseLeave() {
    tooltip().style.display='none'
  }  
  const className='tooltip'
  return <span {...{className,onMouseEnter,onMouseLeave}}  ref={ref}>⚠️</span>
}
export function ToolTipPage(){
  return <table><tbody>
    <tr><td><ToolTip msg='one'/> </td><td className='narrow'><div className='inner_div'><ToolTip msg='two'/>super long text to test sfdkjfskdjfh sdfkjhs fkdhjs</div></td></tr>
    <tr><td><ToolTip msg='one'/> </td><td><ToolTip msg='two'/>super long text to test sfdkjfskdjfh sdfkjhs fkdhjs</td></tr>
    <tr><td><ToolTip msg='one'/> </td><td><ToolTip msg='two'/>super long text to test sfdkjfskdjfh sdfkjhs fkdhjs</td></tr>
    <tr><td><ToolTip msg='one'/> </td><td><ToolTip msg='two'/>super long text to test sfdkjfskdjfh sdfkjhs fkdhjs</td></tr>
    </tbody></table>    
}