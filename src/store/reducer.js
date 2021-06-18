import data from './data'
import {_date} from '../utils'
const intialState={
	admin:data.admin,
	faculty:data.faculty,
	student:data.student,
	courses:data.courses,
	slots:data.slots,
	batch:data.batch,

	faculty_name:"",
	student_name:"",
	slots_name:"",
	course_name:"",
	date:_date(),

	role:"",
	loggedin:false,
	user:{},

	aside:true,
	toaster:{status:false,message:"hi i am a toaster",open:false}
}
function reducer(state=intialState,action)
{
	console.log(action)
	switch(action.type)
	{
		case "toaster open":
			return {...state,toaster:{...state.toaster,open:true,message:action.payload}}
		case "toaster close":
			return {...state,toaster:{...state.toaster,open:false}}
		case "message":
			return {...state,toaster:{...state.toaster,open:true,message:action.payload}}	
		case "aside":
			return {...state,aside:!state.aside}
		case "login":
			return {...state,user:action.user,role:action.role,loggedin:true}	
		case "logout":
			return {...state,user:{},role:"",loggedin:false}	
		case "admin":
			return {...state,admin:action.payload}	
		case "faculty":
			return {...state,faculty:action.payload}	
		case "student":
			return {...state,student:action.payload}	
		case "courses":
			return {...state,courses:action.payload}	
		case "slots":
			return {...state,slots:action.payload}	
		case "batch":
			return {...state,batch:action.payload}	
		case "date":
			return {...state,date:action.payload}	
			
			
		case "faculty_name":return {...state,faculty_name:action.payload}
		case "student_name":return {...state,student_name:action.payload}
		case "course_name":return {...state,course_name:action.payload}
		case "slots_name":return {...state,slots_name:action.payload}
		case "slots_name	":return {...state,slots_name	:action.payload}
		default:
			return state
	}
}

export default reducer