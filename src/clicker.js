function onClick(){
  alert('clicked')
}
var className='clicker'
function Clicker1(){
  return <div {...{onClick,className}}>clicker 1</div>
}
function Clicker2(){
  var props={onClick,className}
  return <div {...props}>clicker 2</div>
}
function Clicker3(){
  return <div className={className} onClick={onClick}>clicker 3</div>
}
function Clickers(){
  return <><Clicker1/><Clicker2/><Clicker3/></>
}