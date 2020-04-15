function Pair([val,set_value]){
    function set(x){
      console.log('set:'+val+'->'+x)
      set_value(x)
    }
    function append(x){
        set_value(val.concat([x]))
    }
    function toggle(){
        set_value(!val)
    }    

    return {val,set,append,toggle}
}
function usePair(init){
  return Pair(React.useState(init))
}

function Input({value,set_value}){
	function onChange(e){
		set_value(e.target.value)
	}
	return <input type="text" {...{value,onChange}} />
}
function InputColor(){
	var[value,set_value]=React.useState('')
	return <div style={{'background':value}} > Hello
		<Input {...{value,set_value}}/>
	</div>
} 

function InputP({value}){
	function onChange(e){
		value.set(e.target.value)
	}
	return <input type="text" {...{value:value.val,onChange}} />
}
function InputColorP({color=''}){
	var value=usePair(color)
	return <div style={{'background':value.val,padding:100,display:'inline'}} >
		<InputP {...{value}}/>
	</div>
} 
function ColorGrid(){
	//return <div><InputColorP color='red'/><InputColorP/></div>
	return <div style={{display:'flex',flexWrap: 'wrap'}}>{Array.from({length: 16}, (v, i) => <InputColorP color='red'/> )}</div>
	return <div><InputColorP color=''/><InputColorP/></div>
}