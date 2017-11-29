import { put, takeEvery } from 'redux-saga/effects'

export function* balls(){
	//yield put({ type: 'PLAY_MUSIC'})
	//yield put({ type: 'BALL_INIT'})
	
	yield put({ type: 'BALL_MOVE_RIGHT'})
}


export function* watchBalls(){
  yield takeEvery('BALL_MOVE', balls)
}
