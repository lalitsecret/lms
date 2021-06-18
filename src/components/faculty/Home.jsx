import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	let a=["admin","faculty","student","courses","slots","batch"]
	let colors=[
		{bg:"orange",c:"white"},
		{bg:"red",c:"white"},
		{bg:"slateblue",c:"white"},
		{bg:"teal",c:"white"},
		{bg:"purple",c:"white"},
		{bg:"#333",c:"white"},
	]
	return <div className="home">
		{a.map((x,i) =>
			<div className="item" style={{color:colors[i].c,background:colors[i].bg}}>
				<h3>{x.toUpperCase()}</h3>
				<h4>Total Admin : ({state[x].length})</h4>
				<Link to={`/${state.role}/${x}`}><i className="fa fa-eye"></i></Link>
			</div>
			
		)}
	</div>	
}
export default App