import { call, put, all } from 'redux-saga/effects';
import safeTakeLatest from './errorHandlers';
import * as act from '../actions';
import api from '../services';

function* getData() {
  const res = yield call(api.getData.getData);
  yield put({ type: act.SET_DATA, payload: res });
}

export default function () {
  return all([
    safeTakeLatest(act.GET_DATA, act.DEFAULT_MESSAGE_ERROR, getData),
  ]);
}
