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