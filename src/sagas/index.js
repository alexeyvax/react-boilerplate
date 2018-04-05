import { all } from 'redux-saga/effects';
import getData from './getData';

export default function* rootSaga() {
  yield all([
    getData(),
  ]);
}
