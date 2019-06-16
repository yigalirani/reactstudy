import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Lister} />
      </div>
    </Router>
  );
}
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
		return <div>
		<Input onSubmit={this.onSubmit} text={this.state.text}/><ol>{
			this.state.list.map(x=><li key={x.id}> {x.tx}</li>)
		}</ol></div>
	}
}

