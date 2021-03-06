import React from 'react';
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
export function usePair(init){
  return Pair(React.useState(init))
}

export function Input({value,set_value}){
	function onChange(e){
		set_value(e.target.value)
	}
	return <input type="text" {...{value,onChange}} />
}
export function InputColor(){
	var[value,set_value]=React.useState('')
	return <div style={{'background':value}} > Hello
		<Input {...{value,set_value}}/>
	</div>
} 

export function InputP({value}){
	function onChange(e){
		value.set(e.target.value)
	}
	return <input type="text" {...{value:value.val,onChange}} />
}
export function InputEnter({value,className}){
	var innervalue=usePair(value.val)
	function onKeyPress(e){
		if (e.key === 'Enter')
			value.set(innervalue.val)
	}
	function onChange(e){
		innervalue.set(e.target.value)
	}
	return <input type="text" {...{value:innervalue.val,onChange,onKeyPress,className}} />
}
export function InputColorP({color='red'}){
	var value=usePair(color)
	return <div style={{'background':value.val,padding:100,display:'inline'}} >
		<InputEnter {...{value,className:'bigger'}}/>
	</div>
} 
export function ColorGrid(){
	//return <div><InputColorP color='red'/><InputColorP/></div>
	return <div style={{display:'flex',flexWrap: 'wrap'}}>{Array.from({length: 16}, v => <InputColorP color={v}/> )}</div>
}