import React, { Component }  from 'react';
export let Mylabel=(props)=>(<div>{props.text}</div>)
class Input extends React.Component{
	constructor(props){
		super(props)
		this.state=({'text':''})
	}
	onChange=(e)=>{
		this.setState({ text: e.target.value });
	}
	onSubmit=(e)=>{
		e.preventDefault();
		if (this.props.onSubmit)
			this.props.onSubmit(e.target[0].value)
		this.setState({'text':''})
	}	

	render(){
	

		return <form onSubmit={this.onSubmit} >
						<input type="text" value={this.state.text} onChange={this.onChange}/>
				</form>
	}
}
export class  Lister extends React.Component {
	constructor(){
		super()
		this.state = {
			list: [
					{tx:'hello',id:1},
					{tx:'world',id:2}
					],
			text:'yo'
    	};
	}
	
	onSubmit=tx=>{
		debugger
		var x={tx,id:Date.now()}
		var list=this.state.list
		list.push(x)
		this.setState({list,text:''})
	}

	
	render(){
		return <div><Input onSubmit={this.onSubmit} text={this.state.text}/><ol>{
			this.state.list.map(x=><li key={x.id}> {x.tx}</li>)
		}</ol></div>
	}
}

