import React, { Component,useState, useEffect }  from 'react';

export let Mylabel=(props)=>(<div>{props.text}</div>)
function Input ({onEnter,onChanged}){//trickster input: shows num changes, replaces dwight with diapers
	var [text,setText]=useState('')
	var [changes,setChanges]=useState(0)
	var onChange=(e)=>{
		debugger
		setText(e.target.value)
		setChanges(changes+1)
		if (onChanged)
			onChanged(e.target.value)
	}
	var onSubmit=(e)=>{
		e.preventDefault();
		if (onEnter)
			onEnter(e.target[0].value)
		setText('')
	}	
	return <form onSubmit={onSubmit} >{changes}
						<input type="text" value={text.replace('dwight','diapers')} onChange={onChange}/>
				</form>
}
var last_lister_state;
export function Lister(){
	var [list,setList]=useState([])
	var [filter,setFilter]=useState('')
	function onEnter(tx){
		var x={tx,id:Date.now()}
		setList(list.concat([x]))
		localStorage.setItem('lister', JSON.stringify(list));
	}
	function onChanged(tx){
		setFilter(tx)
	}
	useEffect(_=>{ //mu ha ha, saving state without using react!!
		var list=JSON.parse(localStorage.getItem('lister'))
		if (list)
				setList(list)
		return _=>last_lister_state=list
	},[])
	function filterit(x){
		if (!filter)
			return true
		return x.tx.includes(filter)
	}
	return <div>
		new Item<Input onEnter={onEnter}/> 
		search <Input onChanged={onChanged}/>
		<ol>{
			list.filter(filterit).map(x=><li key={x.id}> {x.tx}</li>)
		}</ol></div>	
}

