const TheContext=React.createContext({})
function Label(){
	var context=React.useContext(TheContext)
	return <div style={{background:context.color.val}}>hello context</div>
}
function Setter(){
	var context=React.useContext(TheContext)
	return <>setter<InputEnter {...{value:context.color}}/></>
}

function ContextDemo(){
	var  color=usePair('red')
	return <TheContext.Provider value={{color}}>
		 <Setter/>
         <Label/>
      </TheContext.Provider>
}

function Label2({context}){
	//var context=React.useContext(TheContext)
	return <div style={{background:context.color.val}}>hello context</div>
}
function Setter2({context}){
	//var context=React.useContext(TheContext)
	return <>ContextDemoProp<InputEnter {...{value:context.color}}/></>
}

function ContextDemoProp(){
	var  color=usePair('blue')
	var context={color}
	return <>
		 <Setter2 {...{context}}/>
         <Label2  {...{context}}/>
      </>
}