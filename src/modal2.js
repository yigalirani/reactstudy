function ModalWindow2({show_set,children}){
	function onClick(){
		show_set('')
	}	
	return <div className="modal2">
		<div className="modal-content">
			<span {...{onClick}} className="close">&times;</span>
			{children}
		</div>
	</div>
}

function ModalButton2({show_set,name}){
	function onClick(){
		show_set(name)
	}
	return <button {...{onClick}}>{name}</button>
}
function ModalPage2(){
	var [show,show_set]=React.useState('')
	function make_model(){
		if (show=='1')
			return <ModalWindow2 {...{show_set}}>hellow mdal1</ModalWindow2>
		if (show=='2')
			return <ModalWindow2 {...{show_set}}>hellow mdal222</ModalWindow2>
		return null
	}
	return <div>{make_model()}<ModalButton2 {...{show_set,name:'1'}}/><ModalButton2{...{show_set,name:'2'}}/></div>
}