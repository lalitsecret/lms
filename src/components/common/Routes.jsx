import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'


export function Public(props)
{
	let state=useSelector(s=>s)
	let {loggedin,role}=state
	if(loggedin)
	{
		return <Redirect to={`/${role}/home`} />
	}
	else
	{
		return <Route {...props} component={props.component} />
	}

}
export function Private(props)
{
	let state=useSelector(s=>s)
	let {loggedin,role}=state
	if(role!==props.role || !loggedin)
	{
		return <Redirect to="/" />
	}
	else
	{
		return <Route {...props} component={props.component} />
	}

}
