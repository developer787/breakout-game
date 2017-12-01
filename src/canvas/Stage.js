import React from 'react'
import { connect } from 'react-redux'
import Ball from './ball'
import Square from './square'
// import Stage from './Stage'
import { UPDATE_POSITION } from '../store/actions'
// import DPI from 'canvas-dpi-scaler'

const mapStateToProps = (state) => {
	return {
		canvas: state.canvas.canvas,
		ctx: state.canvas.ctx,
		height: state.canvas.height,
		width: state.canvas.width,
		ballX: state.balls.ballX,
		ballY: state.balls.ballY,
		cuadroX: state.square.cuadroX,
		cuadroY: state.square.cuadroY,
		cuadroAltura: state.square.cuadroAltura,
		cuadroAnchura: state.square.cuadroAnchura,
		ballRadius: state.balls.ballRadius,
		dx: state.balls.dx,
		dy: state.balls.dy,
		ballColor: state.balls.ballColor

	}
}
const mapDispatch = (dispatch) => {
	return {
		updatePosition: (payload) => dispatch(UPDATE_POSITION(payload))

	}
}
const greenBall = new Ball()
const square = new Square()

const stage =(props)=>{
	let i = 0
	const {
		dx, updatePosition, dy,
		cuadroAnchura, cuadroAltura, cuadroX, cuadroY,
		ballX, ballY, ballRadius, ballColor,
		ctx, width, height} = props
	if(ctx){
		//requestAnimationFrame(function gameLoop() {
			ctx.clearRect(0, 0, width, height)
			// Start drawing
			  console.log(i++)
			  greenBall.draw(ctx, ballX, ballY, ballRadius, ballColor)
			  square.draw(ctx, width, height, "yellow", cuadroX, cuadroY, cuadroAltura, cuadroAnchura)
			  
			  //greenBall.move(ballX, ballY, dx, dy, width, height, ballRadius, updatePosition)
			// End Drawing
		//	requestAnimationFrame(gameLoop)
		//})
	}
		
	return null
	
}
const Stage = connect(mapStateToProps, mapDispatch)(stage)

export default Stage