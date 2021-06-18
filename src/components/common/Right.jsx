import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {Public,Private} from './Routes'

import Login from '../login/Login'
import Admin from '../admin/App'
import Faculty from '../faculty/App'
import Student from '../student/App'



import {useSelector,useDispatch} from 'react-redux'


function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	return <div className="right">
		<Switch>
			<Public exact path="/" component={Login} />
			<Private role="admin" exact path="/admin/:any" component={Admin} />
			<Private role="faculty" exact path="/faculty/:any" component={Faculty} />
			<Private role="Student" exact path="/Student/:any" component={Student} />
		</Switch>
	</div>
}
export default App
