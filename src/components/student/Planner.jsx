import React from 'react'
import {_calendar,_date,_two} from '../../utils'
import {useSelector,useDispatch} from 'react-redux'
function App()
{

	let [popup,setpopup]=React.useState(false)
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {batch}=state
	let a=_calendar()

	let [mydate,setmydate]=React.useState("")

	const batches=num=>{
		num=_two(num)
		// "2021-05-30"
		let date=_date().split("-").slice(0,2).concat(num).join("-")
		// return date

		return batch.filter(x=>x.date===date)
	}

	const handleClick=x=>{
		
		let length=batches(x).length>0

		if(length>0)
		{

			let num=_two(x)
			// "2021-05-30"
			let date=_date().split("-").slice(0,2).concat(num).join("-")

			setmydate(date)

			setpopup(true)
		}
		else
		{
			dispatch({type:"message",payload:"no batch on this date"})
		}
	}

	let mybatch=batch.filter(x=>x.date===mydate)


	return <div className="calendar">
		<div className={popup?"popup active":"popup"}>
			<button onClick={e=>setpopup(false)}>X</button>
			<h2>All batches {mybatch.length}</h2>
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
						</tr>
					</thead>
					<tbody>
						{mybatch.map(x=>
							<tr key={x.id}>
								<td>{x.id}</td>
								<td>{x.student_name}</td>
								<td>{x.faculty_name}</td>
								<td>{x.slots_name}</td>
								<td>{x.date}</td>
								<td>{x.course_name}</td>
							</tr>
							
						)}
					</tbody>
				</table>
			</div>
		</div>	
		<div className="cal">
			{a.map(x=>
				<div onClick={e=>handleClick(x)} className={batches(x).length>0?"item active":"item"}>
					{x}
				</div>
				
			)}
		</div>
	</div>
}
export default App