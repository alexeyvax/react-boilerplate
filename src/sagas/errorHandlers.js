import { takeLatest } from 'redux-saga/effects';
import errMsgs from '../constants/errorMessages';

function safeTakeLatest(actions, errorAction, saga) {
  return takeLatest(actions, function* handler(...args) {
    try {
      yield* saga(...args);
    } catch (error) {
      console.error(errMsgs[errorAction] || error.toString());
    }
  });
}

export default safeTakeLatest;
