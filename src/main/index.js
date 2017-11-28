import React, { Component } from 'react'
import { connect } from 'react-redux'
import SoundMixer from '../soundmixer'
import Canvas from '../canvas'

const mapStateToProps = (state) => {
	return {
		mainWrapper: state.classNames.mainWrapper
	}
}



class Game extends Component {
	render() {
		const { 
			mainWrapper, 
			welcome, 
			playMusic,
		  stopMusic
		} = this.props
		return (
			<div className={mainWrapper}>
				<SoundMixer />
			    <Canvas />
			</div>
		)
	}
}
const game = connect(
	mapStateToProps)(Game)
export default game
