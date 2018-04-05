import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as act from '../actions';
import api from '../services';

function* getData() {
  const res = yield call(api.getData.getData);
  yield put({ type: act.SET_DATA, payload: res });
}

export default function () {
  return all([
    takeLatest(act.GET_DATA, getData),
  ]);
}
