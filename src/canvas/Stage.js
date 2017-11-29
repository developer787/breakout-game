import React from 'react'
import { connect } from 'react-redux'
import Ball from './ball'
// import Stage from './Stage'
// import { CANVAS_INIT } from '../store/actions'
// import DPI from 'canvas-dpi-scaler'

const mapStateToProps = (state) => {
	return {
		canvas: state.canvas.canvas,
		ctx: state.canvas.ctx,
		height: state.canvas.height,
		width: state.canvas.width,
		ballX: state.balls.ballX,
		ballY: state.balls.ballY,
		ballRadius: state.balls.ballRadius,
		dx: state.balls.dx,
		dy: state.balls.dy,
		ballColor: state.balls.ballColor

	}
}
// const mapDispatch = (dispatch) => {
// 	return {
// 		canvasInit: (props)=>dispatch(CANVAS_INIT(props))
// 	}
// }
const greenBall = new Ball()

class stage extends React.Component {
	render() {
		const { 
			ctx, 
			width,
			ballX,
			ballY,
			ballRadius,
			ballColor,
			dx,
			dy,
			height } = this.props
		if (ctx) {
			let i = 0
			requestAnimationFrame(function gameLoop() {
				ctx.clearRect(0, 0, width, height)
				console.log(i++)
				// Start drawing
				greenBall.draw(ctx, ballX, ballY, ballRadius, ballColor)
				greenBall.move(ballX, ballY, dx, dy, width, height, ballRadius)
				// End Drawing
				requestAnimationFrame(gameLoop)
			})

		}
		return null
	}
}
const Stage = connect(mapStateToProps)(stage)

export default Stage