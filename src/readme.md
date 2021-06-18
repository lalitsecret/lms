eMain
	App-routing
		top
		left right [login,admin,faculty,student]
		footer
lms

	login
		admin
		faculty
		student


top
left right
footer		



admin
id,name,email,phone,password
faculty
id,name,email,phone,password,branch
student
id,name,email,phone,password,branch,course
courses
id,name,price,days
slots
id,name
batch

id,faculty,student,time,date,course,present,reason,remarks,enabled,approved_by
id,fid,sid,slot_id,date,cid,present,reason,remarks,enabled,approved_by

-------Architecure --------
index.js
	Main
		App
		<Header/>
		<Left/>
		<Footer/>
		<Toaster/>
		<Right/>
			--routing
			