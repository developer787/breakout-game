import React, { Component } from 'react'
import { soundManager } from 'soundmanager2'
import { connect } from 'react-redux'
import Music from './music'


soundManager.setup({
	ignoreMobileRestrictions : true
})

const mapStateToProps = (state) => {
	return {
		musicStatus: state.sound.music,
	}
}



class soundMixer extends Component {
	render() {
		const { musicStatus } = this.props

		return (
			<div className={"soundmixer"}>
			  <Music playStatus={musicStatus}/>
			</div>
		)
	}
}

const SoundMixer = connect(
	mapStateToProps)(soundMixer)
export default SoundMixer
