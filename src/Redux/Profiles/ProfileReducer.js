import {Profile_Name} from './ProfileType.js'

const initialState = {
	name:"shubham"
}

const profileReducer = (state=initialState,action)=>{
	switch(action.type){
		case Profile_Name : return {
			name : "shubu"
		}

		default : return state
	}
}

export default profileReducer