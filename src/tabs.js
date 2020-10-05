function Panel({children,title}){
    var [count,set_count]=React.useState(0)
    React.useEffect(_=>{
        console.log(title,'mount')
        return _x=>console.log(title,'unmount')
    })
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
        return <div {...{className,onClick,key:x.key}}>{x.props.title||x.key}</div>
    })
    var panels= children.map(x=>
        <div key={x.key} hidden={x.key==selected}>{x}</div>
    )

    var panel=children.find(x=>x.key==selected)
    return <><div>{tabs}</div>{panels}</>
}
function TabsPage(){
    return <Tabs>
        <Panel key='the_tab1' title='The tab1 title'> tab1<b>rrr</b></Panel>
        <Panel key='the_tab2' title='The tab2 title'> tab2</Panel>
        </Tabs>
}