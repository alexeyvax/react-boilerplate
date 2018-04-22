import { all } from 'redux-saga/effects';
import getDataSagas from './getData';

export default function* rootSaga() {
  yield all([
    getDataSagas(),
  ]);
}
