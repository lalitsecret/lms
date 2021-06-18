import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {batch,user}=state
	batch=batch.filter(x=>x.student_name===user.name)

	const approve=item=>{
		if(item.enabled)
		{
			let ob={
				id:item.id,
				present:1,
				remarks:"approve my attendance plz plz plz"
			}

			batch=batch.map(x=>x.id===ob.id?({...x,...ob}):x)
			dispatch({type:"batch",payload:batch})

			dispatch({type:"message",payload:"marked for review"})
		}
		else
		{

			dispatch({type:"message",payload:"your attendance has been marked or disabled by admin"})
		}

	}

	const reject=item=>{
	}
	

	
	return <div className="wrapper">
			<table cellPadding={10} cellSpacing={0}>
				<thead>
					<tr>
						<th>sno</th>
						<th>faculty</th>
						<th>time</th>
						<th>date</th>
						<th>course</th>
						<th>reason</th>
						<th>remarks</th>
						<th>approved_by</th>
						<th>actions</th>
					</tr>
				</thead>
				<tbody>
					{batch.map(x=>
						<tr key={x.id}>
							<td>{x.id}</td>
							<td>{x.faculty_name}</td>
							<td>{x.slots_name}</td>
							<td>{x.date}</td>
							<td>{x.course_name}</td>
							<td>{x.reason}</td>
							<td>{x.remarks}</td>
							<td>{x.approved_by}</td>
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