import React, { Component } from 'react'
import { soundManager } from 'soundmanager2'
import { connect } from 'react-redux'
import Music from './music'
import Pop from './pop'


soundManager.setup({
	ignoreMobileRestrictions : true
})

const mapStateToProps = (state) => {
	return {
		musicStatus: state.sound.music,
		popStatus: state.sound.pop,
	}
}



class soundMixer extends Component {
	render() {
		const { musicStatus, popStatus } = this.props

		return (
			<div className={"soundmixer"}>
			  <Music playStatus={musicStatus}/>
			  <Pop playStatus={popStatus} />
			</div>
		)
	}
}

const SoundMixer = connect(
	mapStateToProps)(soundMixer)
export default SoundMixer
