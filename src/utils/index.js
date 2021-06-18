export function _calendar()
{

	let str=_date()
	str=str.split("-")
	str=str.map(x=>+x)
	let [y,m]=str
	let num=new Date(y,m,0).getDate()
    num=+num
    let a=new Array(num).fill(0).map((item,index) =>index+1)

    return a
}

export function _date()
{

	let y=new Date().getFullYear()
	let m=new Date().getMonth()+1
	let d=new Date().getDate()

	m=m.toString().length===2?m:`0${m}`
	d=d.toString().length===2?d:`0${d}`

	return `${y}-${m}-${d}`
}

export function _two(x)
{

	x=x.toString().length===2?x:`0${x}`
	return `${x}`
}

export function _login(a,ob)
{
	return a.some(item=>item.email===ob.email && item.password===ob.password)
}
export function _user(a,ob)
{
	return a.find(item=>item.email===ob.email && item.password===ob.password)
}

export function _unique(users,user,key)
{
	// user={name:"lalit",email:"lalit@gmail.com",phone:"",password:""}
	if(Object.values(user).filter(x=>x.trim()==="").length>0)
	{
		return false
	}
	else
	{
		return users.some(item=>item[key]===user[key])===false
	}
}
export function _ob(keys,status=false)
{
	let ob={}

	for(let item of keys)
	{
		ob[item]=""
	}

	if(status)
	{
		return {id:0,...ob}
	}
	else
	{
		return ob
	}
}	