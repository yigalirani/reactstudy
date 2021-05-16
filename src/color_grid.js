import React from 'react';
import {InputP} from './group.js'

export function InputColor({color=''}){
	var [value,set_value]=React.useState(color)
	return <div style={{'background':value.val,padding:50,display:'inline'}} >
		<InputP {...{value,set_value}}/>
	</div>
} 
function range(size){
	return Array.from({length: size}, (v, i)=>i)
}
//const ThemeContext = React.createContext(themes.light);
function ColorRow({size}){
	return <div style={{display:'flex'}}>
	{range(size).map((x,i)=><InputColor key={i}/>)}
	</div>
}

export function ColorGrid({size=4}){
	return <div style={{display:'flex'}}>{
		range(size).map((x,i)=><ColorRow key={i}{...{size}}/>)
	}</div>
}
