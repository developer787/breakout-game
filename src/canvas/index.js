import React from 'react'
import Stage from './Stage'
import DPI from 'canvas-dpi-scaler'


class Canvas extends React.Component {
	componentDidMount() {
		this.updateCanvas()
	}
	componentDidUpdate(){
		this.updateCanvas()
	}
	updateCanvas() {
		const ctx = this.refs.canvas.getContext('2d')
		const canvas = this.refs.canvas
		const width = window.innerWidth
		const height = window.innerHeight
		const ratio = DPI(canvas, ctx, width, height)
		console.log(ratio)
		if(ratio === 1){
			canvas.width = width
			canvas.height = height
		}
	}
	render() {
		return (
			<canvas ref="canvas">
			  <Stage 
			    canvas={canvas}
			    context={ctx}
			    width={width}
			    height={height} />
			</canvas>
		)
	}
}



export default Canvas



// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import SoundMixer from '../soundmixer'
// import { PLAY_MUSIC, STOP_MUSIC } from '../store/actions'

// const mapStateToProps = (state) => {
// 	return {
// 		mainWrapper: state.classNames.mainWrapper,
// 		welcome: state.messages.welcome
// 	}
// }
// const mapDispatch = (dispatch) => {
// 	return {
// 		playMusic: ()=>dispatch(PLAY_MUSIC()),
// 		stopMusic: ()=>dispatch(STOP_MUSIC())
// 	}
// }


// class Game extends Component {
// 	render() {
// 		const { 
// 			mainWrapper, 
// 			welcome, 
// 			playMusic,
// 		  stopMusic
// 		} = this.props
// 		return (
// 			<div className={mainWrapper}>
// 				<SoundMixer />
// 			  <h1>Redux Blank</h1>
// 			  <p>{welcome}</p>
// 			  <button onClick={playMusic}>Play Music</button>
// 			  <button onClick={stopMusic}>Stop Music</button>
// 			</div>
// 		)
// 	}
// }
// const game = connect(
// 	mapStateToProps, mapDispatch)(Game)
// export default game
