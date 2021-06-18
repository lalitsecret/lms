import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
		
	let {role,user,loggedin}=state	

	let a=["home","admin","faculty","student","courses","slots","chart","batch","graph","planner","attendance"]


	if(loggedin)
	{
		return <aside className={state.aside?"active":""}>
			<div className="avatar">
				{role} Dashboard
			</div>

			<div className="links">
				{a.map(x=>
					<Link to={`/${role}/${x}`}>
						<span>{x}</span>
						<i className="fa fa-caret-right"></i>
					</Link>
					
				)}
			</div>
			<div className="logout">
				<Link onClick={e=>dispatch({type:"logout"})} to="/"> <span>logout</span> <i className="fa fa-power-off"></i></Link>
			</div>
		</aside>
	}
	else if(role)
	{
		return <aside className={state.aside?"active":""}>
			<div className="avatar">
				unknown user
			</div>
			<div className="links">
				{a.map(x=>
					<Link to={`/`}>
						<span>{x}</span>
						<i className="fa fa-caret-right"></i>
					</Link>
					
				)}
			</div>
			<div className="logout">
				<Link  to="/"> <span>login to view </span> <i className="fa fa-power-off"></i></Link>
			</div>

		</aside>
	}
	else
	{
		return null
	}
}
export default App
