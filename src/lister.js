import React, { Component,useState, useEffect }  from 'react';

export let Mylabel=(props)=>(<div>{props.text}</div>)
function Input ({onEnter}){//trickster input: shows num changes, replaces dwight with diapers
	var [text,setText]=useState('')
	var [changes,setChanges]=useState(0)
	var onChange=(e)=>{
		setText(e.target.value)
		setChanges(changes+1)
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
export class  Lister extends React.Component {
	constructor(){
		super()
		this.state = {
			list: [
					],
			text:'yo'
    	};
	}
	
	onEnter=tx=>{
		var x={tx,id:Date.now()}
		var list=this.state.list
		list.push(x)
		this.setState({list,text:''})
		localStorage.setItem('lister', JSON.stringify(this.state.list));
	}

	
	render(){
		return <div>
		<Input onEnter={this.onEnter} text={this.state.text}/><ol>{
			this.state.list.map(x=><li key={x.id}> {x.tx}</li>)
		}</ol></div>
	}
  componentDidMount() { //mu ha ha, saving state without using react!!
  	var list =JSON.parse(localStorage.getItem('lister')||'[]')
  	this.setState({list})

  }

  componentWillUnmount() {
  	last_lister_state=this.state

  }	
}

