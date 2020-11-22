function use_counters(){
  var [count,set_count]=React.useState([])
  var [count2,set_count2]=React.useState([])
  function inc(){
    console.log('point 1')      
    set_count(count.concat('a'))
    console.log('point 2')  
    set_count2(count2.concat('a'))
    console.log('point 3')      
  }
  async function inc2(){
    await inc()
  }  
  return {count,count2,inc2,inc}
}
function Sequence(){
    var counters=use_counters()

    function onClick(){
      counters.inc()
    }
    console.log('render')
    return <div>
        {counters.count.length} {counters.count2.length}
        <button {...{onClick}}>up</button>
    </div>
}
