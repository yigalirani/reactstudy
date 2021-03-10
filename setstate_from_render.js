function SetStateFromRender(){
  var [outer_state,set_outer_state]=React.useState('')
  function onChange(e){
		set_outer_state(e.target.value)
	}
	return <div>
    <input type="text" {...{value,onChange}} /> 
  </div>
}