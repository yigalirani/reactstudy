
import React,{ useState,useEffect } from 'react';
export function Svgdemo(){
	var [x,setx]=useState(0)
	function setint(){
		console.log(x)
		var interval=setInterval(_=>{
			setx(x=>(x+1)%140)
		},10)
		return _=> clearInterval(interval)
	}
	useEffect(_=>setint(),[])
	return <svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x={x} y="125" fontSize="60" textAnchor="middle" fill="white">SVG</text>

</svg>
	return <div>hello</div>
}