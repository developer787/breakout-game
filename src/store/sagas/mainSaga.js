import { put, takeEvery } from 'redux-saga/effects'


export function* mainSaga(){
	yield put({ type: 'BALL_MOVE'})
}

export function* watchMainSaga(){
  yield takeEvery('MAIN_SAGA', mainSaga)
}
