import { call, put } from 'redux-saga/effects';

import * as act from '../../actions/types';
import { getData } from '../data';
import api from '../../services';
import { data } from '../../../mocks';

describe('getData Saga test', () => {
  it('should return the initial state', () => {
    const generator = getData();

    expect(generator.next().value).toEqual(call(api.data.getData));
    expect(generator.next(data).value).toEqual(put({ type: act.SET_DATA, payload: data }));
    expect(generator.next().done).toBeTruthy();
  });
});
