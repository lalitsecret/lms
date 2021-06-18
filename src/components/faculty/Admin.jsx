import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_ob,_unique} from '../../utils'
function App()
{
	let page="admin"
	
	let keys=["name","email","phone","password"]

	let [ob1,setob1]=React.useState( _ob(keys,false) )
	let [ob2,setob2]=React.useState( _ob(keys,true) )


	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let a=state[page]


	const insert=e=>{
		e.preventDefault()
		dispatch({type:"message",payload:"not allowed"})
	}
	const edit=x=>{
		setob2(x)
	}
	const del=id=>{
		a=a.filter(x=>x.id!==id)
		dispatch({type:"message",payload:"not allowed"})
	}
	const update=e=>{
		e.preventDefault()
		dispatch({type:"message",payload:"not allowed"})
	}
	

	
	return <div className="wrapper">
		<form autoComplete={"off"} onSubmit={insert}>
			<h2>New {page}</h2>
			{keys.map(x=>
				<input
				name={x}
				placeholder={x}
				value={ob1[x]}
				onChange={e=>setob1({...ob1,[x]:e.target.value})}
				/>
				
			)}
			<button>insert</button>
		</form>	
		{
			ob2.id>0
			&&
			<form autoComplete={"off"} onSubmit={update}>
				<h2>edit {page} {ob2.id}</h2>
				{keys.map(x=>
					<input
					name={x}
					placeholder={x}
					value={ob2[x]}
					onChange={e=>setob2({...ob2,[x]:e.target.value})}
					/>
					
				)}
				<button>update</button>
			</form>	
			
			
		}			

		{
			a.length>0
			?
			<>
				<h2>all {page} {a.length}</h2>
				<table cellSpacing={0} cellPadding={10}>
					<thead>
						<tr>
							<th>id</th>
							{keys.map(x=>
								<th>{x}</th>
							)}
							<th>actions</th>
						</tr>
					</thead>
					<tbody>
						{a.map(x=>
							<tr>
								<td>{x.id}</td>
								{keys.map(y=>
									<td>{x[y]}</td>
								)}
								<td>
									<button 
									onClick={e=>edit(x)}
									className="edit-btn">
									<i className="fa fa-pencil"></i>
									</button>
									<button 
									onClick={e=>del(x.id)}
									className="del-btn">
									<i className="fa fa-trash-o"></i>
									</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</>
			:
			<h1>No {page} data Found</h1>
		}
	</div>	
}
export default App