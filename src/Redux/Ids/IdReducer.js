import {Profile_Id} from './IdType.js'

const initialState = {
	id:"not_set"
}

const idReducer = (state=initialState,action)=>{
	switch(action.type){
		case Profile_Id : return {
			id : "1"
		}

		default : return state
	}
}

export default idReducer