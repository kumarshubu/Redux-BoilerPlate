import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../Redux/Users/UserAction.js'

function User({userData,error,fetchUser}) {
	useEffect(()=>{
		fetchUser()
	},[])
	return userData.loading? (<div>"true"</div>):(<div>{userData.map(user=><p>{user}</p>)}</div>)
}

const mapStateToProps = state => {
	return {
		userData : state.User.users
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		fetchUser : ()=>dispatch(fetchUsers())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(User)