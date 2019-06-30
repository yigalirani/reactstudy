import React, { useState, useEffect }  from 'react';

export let Mylabel=(props)=>(<div>{props.text}</div>) //very early example, not used, but let it be so we can reminder how far we went
function Input ({onEnter,onChanged}){//trickster input: shows num changes, replaces dwight with diapers
	var [text,setText]=useState('')
	var [changes,setChanges]=useState(0)
	var onChange=(e)=>{
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
export function Lister(){
	var [list,setList]=useState([])
	var [filter,setFilter]=useState('')
	function onEnter(tx){
		var x={tx,id:Date.now()}
		var new_list=list.concat([x])
		setList(new_list)
		localStorage.setItem('lister', JSON.stringify(new_list));
	}
	function onChanged(tx){
		setFilter(tx.trim())
	}
	useEffect(_=>{ //mu ha ha, saving state without using react!!
		var list=JSON.parse(localStorage.getItem('lister'))
		if (list)
				setList(list)
	},[])
	function has_filter(){
		return (filter && filter!='')
	}
	function filterit(x){
		if (!has_filter())
			return true
		return x.tx.includes(filter)
	}
	var filtered=list.filter(filterit)
	function renderit(x){
		var tx=x.tx
		if (has_filter())
			tx=tx.replace(RegExp(filter, "ig"),`<b>$&</b>`)
		//return <li key={x.id}> {tx}</li>
		return <li key={x.id} dangerouslySetInnerHTML={{__html:tx}}/>
	}
	return <div>
		new Item<Input onEnter={onEnter}/> 
		search <Input onChanged={onChanged}/>
		<ol>{
			filtered.map(renderit)
		}</ol></div>	
}