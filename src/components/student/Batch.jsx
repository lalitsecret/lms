import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {faculty,student,courses,slots,batch,faculty_name,student_name,slots_name,course_name,date}=state

	const del=id=>{
		dispatch({type:"message",payload:"not allowed"})
	}
	const view=x=>{
		dispatch({type:"student_name",payload:x.student_name})
		dispatch({type:"course_name",payload:x.course_name})
		dispatch({type:"slots_name",payload:x.slots_name})
		dispatch({type:"faculty_name",payload:x.faculty_name})
	}
	

	const p1=(e,x) =>{
		dispatch({type:"student_name",payload:x.name})
		dispatch({type:"course_name",payload:x.course})
	}	

	const p2=(e,name) =>{
		e.preventDefault()
		dispatch({type:"slots_name",payload:name})
	}

	const p3=(e,name) =>{
		e.preventDefault()
		dispatch({type:"message",payload:"not allowed"})
	}

	const _fid=name=>{
		dispatch({type:"faculty_name",payload:name})
	}
	
	return <div className="wrapper batch">
		
		<div className="b-flex">
			<div className="item1">
				<h5>Slots {slots.length}</h5>
				<div className="scroll">
					{slots.map(x=>
						<p
						onDrop={e=>p3(e,x.name)}
						onDragOver={e=>p2(e,x.name)}
						className={x.name===slots_name?"active":""}
						>{x.name}</p>
					)}
				</div>
			</div>
			<div className="item1">
				<h5>student {student.length}</h5>
				<div className="scroll">
					{student.map(x=>
						<p
						draggable={true}
						onDragStart={e=>p1(e,x)}
						className={x.name===student_name?"active":""}
						>{x.name}</p>
					)}
				</div>
			</div>
			<div className="item1">
				<h5>faculty {faculty.length}</h5>
				<div className="scroll">
					{faculty.map(x=>
						<p
						onClick={e=>_fid(x.name)}
						className={x.name===faculty_name?"active":""}
						>{x.name}</p>
					)}
				</div>
			</div>
			
			<div className="item2">
				<h5>Batch {batch.length}</h5>
				<input 
				type="date" 
				value={date}
				min={date}
				onChange={e=>dispatch({type:"date",payload:e.target.value})}
				/>
				<div className="scroll">
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
										<button onClick={e=>view(x)} className="edit-btn"><i className="fa fa-eye"></i></button>
										<button onClick={e=>del(x.id)} className="del-btn"><i className="fa fa-trash-o"></i></button>
									</td>
								</tr>
								
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
}
export default App