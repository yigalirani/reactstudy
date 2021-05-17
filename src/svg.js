import React from 'react';
export function Svgdemo(){
	var [x,setx]=React.useState(0)
	function setint(){
		console.log(x)
		var interval=setInterval(()=>{
			setx(x=>(x+1)%140)
		},10)
		return ()=> clearInterval(interval)
	}
	React.useEffect(()=>setint(),[])
	return <svg version="1.1"
     baseProfile="full"
     width="1000" height="1000"
     xmlns="http://www.w3.org/2000/svg"
     >

  <rect width="100%" height="100%" fill="red" />
  <rect x="0" y="0" width="100" height="100" fill='yellow'/>

  <circle cx="150" cy="100" r="80" fill="green" />
  <polyline points={x+' 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145'}
      stroke="orange" fill="transparent" strokeWidth="5"/>
  <text x={x} y="125" fontSize="60" textAnchor="middle" fill="white">SVG</text>
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" strokeWidth="5"/>
<path d="M 10 10 h 90 V 90 H 1000 L 10 120 Z" stroke="pink" strokeWidth="5" fill='transparent'/>
</svg>

}