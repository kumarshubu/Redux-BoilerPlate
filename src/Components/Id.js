import React from 'react'
import {connect} from 'react-redux'
import {profile_id} from '../Redux/Ids/IdAction.js'

function Id(props) {
	return(
		<div>
			Id: {props.id}
			<button onClick={props.Profile_Id}>Change Id</button>
		</div>
		)
}

const mapStateToProps = state => {
	return {
		id : state.Id.id
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		Profile_Id : ()=>dispatch(profile_id())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Id)