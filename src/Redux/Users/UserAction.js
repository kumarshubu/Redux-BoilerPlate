import axios from 'axios'
import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './UserType.js'

export const fetch_user_request =()=>{
	return {
		type:FETCH_USER_REQUEST
	}
}

	   const fetch_user_success =(users)=>{
	return {
		type:FETCH_USER_SUCCESS,
		payload:users
	}
}

 	   const fetch_user_failure =(error)=>{
	return {
		type:FETCH_USER_FAILURE,
		payload:error
	}
}

export const fetchUsers = ()=>{
	return(dispatch)=>{
		dispatch(fetch_user_request)
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(res=>{
				const users = res.data.map(user=>user.name)
				dispatch(fetch_user_success(users))
			})
			.catch(error =>{
				const errorMsg = error.message
				dispatch(fetch_user_failure(errorMsg))
			})
	}
}