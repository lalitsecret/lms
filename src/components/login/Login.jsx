import React from 'react'
import {_login,_user} from '../../utils'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{

	let [ob,setob]=React.useState({email:"",password:""})

	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	const handleChange=e=>{
		let {placeholder,value}=e.target
		setob({...ob,[placeholder]:value})

	}


	const handleClick=e=>{
		let {name}=e.target
		let role=name

		let a=state[role]


		if(a.some(x=>x.email===ob.email && x.password===ob.password))
		{
			let user=a.find(x=>x.email===ob.email && x.password===ob.password)
			dispatch({type:"login",role,user})
			dispatch({type:"message",payload:"loggedin as "+role})

			if(role==="faculty")
			{
				dispatch({type:"faculty_name",payload:user.name})
			}
			props.history.push(`/${role}/home`)
		}	
		else{
			dispatch({type:"message",payload:"failed to loggedin as "+role})
		}	
	}

	return <div className="login">
		<h1>Login Page</h1>
		<p>email</p>
		<div className="form-flex">
			<input
			placeholder="email"
			value={ob.email}
			onChange={handleChange}
			 />
			 <i className="fa fa-envelope"></i>
		</div>
		<p>password</p>
		<div className="form-flex">
			<input
			placeholder="password"
			value={ob.password}
			onChange={handleChange}
			 />
			 <i className="fa fa-lock"></i>
		</div>
		<button onClick={handleClick} name="admin">Admin <i className="fa fa-user"></i></button>
		<button onClick={handleClick} name="faculty">Faculty <i className="fa fa-users"></i></button>
		<button onClick={handleClick} name="student">Student <i className="fa fa-users"></i></button>
	</div>
}
export default App