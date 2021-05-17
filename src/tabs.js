import React from 'react';
function Panel({children,title}){
    var [count,set_count]=React.useState(0)
    React.useEffect(()=>{
        console.log(title,'mount')
        return ()=>console.log(title,'unmount')
    },[])
    console.log(title,'rener')
    function onClick(){
        set_count(count+10)
    }
    return <>{count}<button  {...{onClick}}>up</button><div>{children}</div></>
} 
function Tabs({children}){
    var [selected,set_selected]=React.useState(children[0].key)
    var tabs= children.map(x=>{
        function onClick(){
            set_selected(x.key)
        }
        var className=(selected==x.key)?'tab selected':'tab'
        return <div key={x.key} {...{className,onClick}}>{x.props.title||x.key}</div>
    })
    var panels= children.map(x=>
        <div key={x.key} hidden={x.key!=selected}>{x}</div>
    )

    var panel=children.find(x=>x.key==selected)
    return <><div>{tabs}</div>{panels}</>
}
export function TabsPage(){
    return <Tabs>
        <Panel key='the_tab1' title='The tab1 title'> tab1<b>rrr</b></Panel>
        <Panel key='the_tab2' title='The tab2 title'> tab2</Panel>
        <Panel key='the_tab3' title='The tab3 title'> tab33333</Panel>        
        </Tabs>
}