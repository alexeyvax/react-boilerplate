import { call, put, all } from 'redux-saga/effects';

import * as act from '../actions/types';
import { setData } from '../actions/creators';
import safeTakeLatest from './errorHandlers';
import api from '../services';

export function* getData() {
  const res = yield call(api.data.getData);

  yield put(setData(res));
}

export default function () {
  return all([
    safeTakeLatest(act.GET_DATA, act.DEFAULT_MESSAGE_ERROR, getData),
  ]);
}
