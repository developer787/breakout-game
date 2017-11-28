import { put, takeEvery } from 'redux-saga/effects'


export function* mainSaga(){
	const subSagaResult = yield subSaga()
  const payload = 'test' 
	//yield put({ type: 'PLAY_MUSIC'})
  yield put({ 
		type: 'WELCOME' , 
		payload
	})
}

export function* subSaga(){
	yield "Hello."
  yield "Sub saga"
}

export function* watchMainSaga(){
  yield takeEvery('MAIN_SAGA', mainSaga)
}
