import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {    
  const json = yield fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json(), );   
  yield put({ type: "NEWS_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}