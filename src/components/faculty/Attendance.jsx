import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {batch,user}=state

	const approve=item=>{
		let ob={
			id:item.id,
			present:1,
			enabled:false,
			approved_by:"faculty "+user.name,
			remarks:"faculty marked attendance"
		}

		batch=batch.map(x=>x.id===ob.id?({...x,...ob}):x)
		dispatch({type:"batch",payload:batch})
		dispatch({type:"message",payload:"approved for "+item.student_name})
	}

	const reject=item=>{
		let ob={
			id:item.id,
			present:0,
			enabled:false,
			approved_by:"admin",
			remarks:"admin reject your attendance"
		}

		batch=batch.map(x=>x.id===ob.id?({...x,...ob}):x)
		dispatch({type:"batch",payload:batch})
		dispatch({type:"message",payload:"approved for "+item.student_name})
	}
	
	batch=batch.filter(x=>x.faculty_name===user.name)

	
	return <div className="wrapper">
			<table cellPadding={10} cellSpacing={0}>
				<thead>
					<tr>
						<th>sno</th>
						<th>student</th>
						<th>faculty</th>
						<th>time</th>
						<th>date</th>
						<th>course</th>
						<th>actions</th>
					</tr>
				</thead>
				<tbody>
					{batch.map(x=>
						<tr key={x.id}>
							<td>{x.id}</td>
							<td>{x.student_name}</td>
							<td>{x.faculty_name}</td>
							<td>{x.slots_name}</td>
							<td>{x.date}</td>
							<td>{x.course_name}</td>
							<td>
								{
									x.present===0
									?
									<button onClick={e=>approve(x)}><i className="fa fa-check"></i></button>
									:
									<button onClick={e=>reject(x)}><i className="fa fa-times"></i></button>

								}
							</td>
						</tr>
						
					)}
				</tbody>
			</table>
	</div>
}
export default App