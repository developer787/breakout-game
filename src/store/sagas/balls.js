import { delay } from 'redux-saga'
import { put, takeEvery, select } from 'redux-saga/effects'
import { BALL_MOVE_RIGHT, UPDATE_POSITION, INVERT_DIRECTION_X } from '../actions'
import store from '../'

export function* balls() {
	//yield put({ type: 'PLAY_MUSIC'})
	//yield put({ type: 'BALL_INIT'})

    let i = 0
	yield requestAnimationFrame(function gameLoop() {
		const state = store.getState()
		const { width } = state.canvas
		let { ballX, dx, ballRadius, ballY } = state.balls
		// Start drawing
		console.log(i++, state)

		if (ballX + dx > width - ballRadius || ballX + dx < ballRadius) {
			console.log("EDGEEE")

			store.dispatch(INVERT_DIRECTION_X())
		}
		ballX += dx
		store.dispatch(UPDATE_POSITION({
			ballX,
			ballY
		}))
		//greenBall.move(ballX, ballY, dx, dy, width, height, ballRadius, updatePosition)
		// End Drawing
		requestAnimationFrame(gameLoop)
	})
}


export function* watchBalls() {
	yield takeEvery('BALL_MOVE', balls)
}

// export function* drawballs(){
// 	//yield put({ type: 'PLAY_MUSIC'})
// 	//yield put({ type: 'BALL_INIT'})

// 	yield put({ type: 'BALL_MOVE_RIGHT'})
// }