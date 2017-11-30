import React, { Component } from 'react'
import { soundManager } from 'soundmanager2'
import { connect } from 'react-redux'
import Music from './music'
import Pop from './pop'

import { DONE } from '../store/actions'


soundManager.setup({
	ignoreMobileRestrictions : true
})

const mapStateToProps = (state) => {
	return {
		musicStatus: state.sound.music,
		popStatus: state.sound.pop,
	}
}

const mapDispatch = (dispatch)=>{
	return {
		done: ()=>dispatch(DONE())
	}
}

class soundMixer extends Component {
	render() {
		const { musicStatus, popStatus, done } = this.props

		return (
			<div className={"soundmixer"}>
			  <Music playStatus={musicStatus}/>
			  <Pop done={done} playStatus={popStatus} />
			</div>
		)
	}
}

const SoundMixer = connect(
	mapStateToProps, mapDispatch)(soundMixer)
export default SoundMixer
