function Input({value,set_value}){
	function onChange(e){
		set_value(e.target.value)
	}
	return <input type="text" {...{value,onChange}} />
}
function InputColor({color=''}){
	var [value,set_value]=React.useState(color)
	return <div style={{'background':value.val,padding:50,display:'inline'}} >
		<InputP {...{value,set_value}}/>
	</div>
} 
function range(size){
	return Array.from({length: size}, (v, i)=>i)
}
const ThemeContext = React.createContext(themes.light);
function ColorRow({size}){
	return <div style={{display:'flex'}}>
	{range(size).map(x=><InputColor/>)}
	</div>
}

function ColorGrid({size=4}){
	return <div style={{display:'flex'}}>{
		range(size).map(x=><ColorRow {..{size}}/>)
	}</div>
}
ReactDOM.render(<ColorGrid/>)