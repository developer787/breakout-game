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
			height } = this.props
		if (ctx) {
			let i = 0
			requestAnimationFrame(function gameLoop() {
				ctx.clearRect(0, 0, width, height)
				console.log(i++)
				// Start drawing
				greenBall.draw(ctx, ballX, ballY, ballRadius, ballColor)
				// End Drawing
				requestAnimationFrame(gameLoop)
			})

		}
		return null
	}
}
const Stage = connect(mapStateToProps)(stage)

export default Stage

function drawBall(ctx, x, y) {
	var ballRadius = 10;

	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}
// function draw(ctx, vw, vh) {
//         var ballRadius = 10;

// var x = vw/2;
// var y = vh-30;
// var dx = 2;
// var dy = -2;
//     drawBall(ctx, x, y);

//     if(x + dx > vw-ballRadius || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if(y + dy > vh-ballRadius || y + dy < ballRadius) {
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;
// }

// export default () => {

//   // Your artwork starts here...

//     draw(ctx, vw, vh)
// 	// And it ends here.
// }