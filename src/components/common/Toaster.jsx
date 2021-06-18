import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function Toaster()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {toaster}=state

	const handleKey= e =>{
		let {code}=e
		// alert(code)
		if(code==="Escape")
		{
			dispatch({type:"toaster close"})
		}
	}

	const BindKeys=() =>{
		window.addEventListener("keyup",handleKey)
	}

	React.useEffect(BindKeys,[])


	const handleClose=e=>{
		dispatch({type:"toaster close"})
	}
	return <div className={toaster.open?"toaster active":"toaster"}>
		<div className="body">
			<h1>System says </h1>
			<h2>{toaster.message}</h2>
		</div>
		<div className="footer">
			<button onClick={handleClose}>X</button>
		</div>
		
	</div>
}
export default Toaster