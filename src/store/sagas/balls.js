import { delay } from 'redux-saga'
import { put, takeEvery, select } from 'redux-saga/effects'
import { 
	BALL_MOVE_RIGHT, UPDATE_POSITION, 
	INVERT_DIRECTION_X, INVERT_DIRECTION_Y } from '../actions'
import store from '../'

export function* balls() {
	//yield put({ type: 'PLAY_MUSIC'})
	//yield put({ type: 'BALL_INIT'})

   
	yield requestAnimationFrame(function gameLoop() {
		const state = store.getState()
		const { width, height } = state.canvas
		let { ballX, dy, dx, ballRadius, ballY } = state.balls
		// Start drawing


		if (ballX + dx > width - ballRadius || ballX + dx < ballRadius) {

			store.dispatch(INVERT_DIRECTION_X())
		}
		if (ballY + dy > height - ballRadius || ballY + dy < ballRadius) {

			store.dispatch(INVERT_DIRECTION_Y())
		}
		ballX += dx
		ballY += dy
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