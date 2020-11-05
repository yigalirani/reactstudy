
function Sequence(){

    var [count,set_count]=React.useState(0)
    var [count2,set_count2]=React.useState(0)
    function onClick(){
      console.log('point 1')      
      set_count(count+1)
      console.log('point 2')  
      set_count2(count2+1)
      console.log('point 3')  
    }
    return <div>
        {count} {count2}
        <button {...{onClick}}>up</button>
    </div>
}
