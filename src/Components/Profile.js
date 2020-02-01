import React from 'react'
import {connect} from 'react-redux'
import {profile_name} from '../Redux/Profiles/ProfileAction.js'

function Profile(props) {
	return(
		<div>
			Name: {props.name}
			<button onClick={props.Profile_Name}>Change Name</button>
		</div>
		)
}

const mapStateToProps = state => {
	return {
		name : state.Profile.name
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		Profile_Name : ()=>dispatch(profile_name())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)