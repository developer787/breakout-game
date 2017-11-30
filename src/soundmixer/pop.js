import React, { Component } from 'react'
import Sound from 'react-sound'
import popBall from './popBall.wav'


class Pop extends Component {
	render() {
		const { playStatus } = this.props
		return (
			  <Sound
			    volume={90}
			    url={popBall}
			    playStatus={playStatus}/>
		)
	}
}

export default Pop
