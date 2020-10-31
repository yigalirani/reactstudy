function CloseButton({onClick}){
  return <span className='closebutton'  {...{onClick}}>🗙</span>
}

function Group({children,is_default,set_is_default}){
  var className='group'
  var closenutton=null
  if (!is_default()){
    className+=' group_selected'
    closenutton=<CloseButton onClick={set_is_default}/>
  }
  return <div {...{className}}>{closenutton}{children}</div>
}
function InputP({value,set_value}){
	function onChange(e){
		set_value(e.target.value)
	}
	return <input type="text" {...{value,onChange}} />
}
function GroupTest(){
  var [value,set_value]=React.useState('')
  function is_default(){
    return value.trim()=='t'
  }
  function set_is_default(){
    set_value('t')
  }
  var select = <InputP {...{value,set_value}}/>
  return <Group {...{is_default,set_is_default}}>{select}</Group>
}