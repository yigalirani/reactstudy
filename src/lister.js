import React, { Component }  from 'react';

export let Mylabel=(props)=>(<div>{props.text}</div>)
class Input extends React.Component{
	constructor(props){
		super(props)
		this.state=({'text':'',num_changes:0})
	}
	onChange=(e)=>{
		this.setState({ text: e.target.value,num_changes:this.state.num_changes+1 });
	}
	onSubmit=(e)=>{
		e.preventDefault();
		if (this.props.onSubmit)
			this.props.onSubmit(e.target[0].value)
		this.setState({'text':''})
	}	

	render(){
	

		return <form onSubmit={this.onSubmit} >{this.state.num_changes}
						<input type="text" value={this.state.text.replace('xx',' ')} onChange={this.onChange}/>
				</form>
	}
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
	
	onSubmit=tx=>{
		debugger
		var x={tx,id:Date.now()}
		var list=this.state.list
		list.push(x)
		this.setState({list,text:''})
		localStorage.setItem('lister', JSON.stringify(this.state.list));
	}

	
	render(){
		return <div>
		<Input onSubmit={this.onSubmit} text={this.state.text}/><ol>{
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

