import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	return <header>
		<div>
			<i onClick={e=>dispatch({type:"aside"})} className="fa fa-bars"></i>
		</div>
		<div>
			<span>Welcome {state.role?state.role:'unknown'}</span>
		</div>
	</header>
}
export default App
