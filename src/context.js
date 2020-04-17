const TheContext=React.createContext({})
function Label(){
	var context=React.useContext(TheContext)
	return <div style={{background:context.color.val}}>hello context</div>
}

function ContextDemo(){
	var  color=usePair('red')
	return <TheContext.Provider value={{color}}>
	     <InputEnter {...{value:color}}/>
         <Label/>
      </TheContext.Provider>
}