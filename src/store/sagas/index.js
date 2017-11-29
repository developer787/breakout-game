import { put, select, all } from 'redux-saga/effects'
import { watchMainSaga } from './mainSaga'
import { watchBalls } from './balls'

export function* welcome(){
	yield put({
		type: 'MAIN_SAGA'
	})
}

export default function* rootSaga() {
  yield all([
    watchMainSaga(),
    watchBalls(),
    welcome()
  ])
}
