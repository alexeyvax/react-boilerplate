import { all } from 'redux-saga/effects';

import getDataSagas from './data';

export default function* rootSaga() {
  yield all([
    getDataSagas(),
  ]);
}
