import React from 'react';
function ModalWindow({show,show_set,children}){
	var className='modal'
	if (show)
		className+=' show'
	function onClick(){
		show_set(false)
	}	
	return <div {...{className}}>
		<div className="modal-content">
			<span {...{onClick}} className="close">&times;</span>
			{children}
		</div>
	</div>
}

function ModalButton(){
	var [show,show_set]=React.useState(false)
	function onClick(){
		show_set(true)
	}
	return <><ModalWindow {...{show,show_set}}><h1>modal window</h1>
		<button onClick={()=>show_set(false)}>Close</button>
	</ModalWindow><button {...{onClick}}>click</button></>
}
export function ModalPage(){
	return <ModalButton/>
}