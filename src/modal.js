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
			<p>Some text in the Modal..</p>
			{children}
		</div>
	</div>
}

function ModalButton(){
	var [show,show_set]=React.useState(false)
	function onClick(){
		show_set(true)
	}
	return <><ModalWindow {...{show,show_set}}>hellow</ModalWindow><button {...{onClick}}>click</button></>
}
function ModalPage(){
	return <ModalButton/>
}