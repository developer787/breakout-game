import React, { Component } from 'react'
import Sound from 'react-sound'
import music from './music.mp3'


class Music extends Component {
	render() {
		const { playStatus } = this.props
		return (
			  <Sound
			    volume={80}
			    loop={true}
			    url={music}
			    playStatus={playStatus}/>
		)
	}
}

export default Music
