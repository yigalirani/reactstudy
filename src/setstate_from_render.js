function Inner({outer_state,inner_state,set_inner_state}){
  if (inner_state.length<outer_state.length){ //change < to <= and you got yourself an infiniate loop
    set_inner_state(outer_state)
  }
  return <ol>
    <li>{inner_state}</li>
    <li>{outer_state}</li>
  </ol>
}

function SetStateFromRender(){
  var [inner_state,set_inner_state]=React.useState('')
  var [outer_state,set_outer_state]=React.useState('')
  function onChange(e){
		set_outer_state(e.target.value)
	} 
	return <div>
    
    <input type="text" {...{outer_state,onChange}} />
    <Inner {...{outer_state,inner_state,set_inner_state}}/> 
  </div>
}