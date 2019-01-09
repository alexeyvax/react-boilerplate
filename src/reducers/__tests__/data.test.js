import reducer from '../data';
import * as act from '../../actions/types';
import { data, initStateGetData } from '../../../mocks';

describe('data reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, initStateGetData)).toEqual({ data: {}, name: 'Alexeyvax' });
  });

  it('should handle SET_DATA', () => {
    const startAction = {
      type: act.SET_DATA,
      payload: data,
    };
    expect(reducer(initStateGetData, startAction)).toEqual({ data, name: 'Alexeyvax' });
  });

  it('should handle CLEAR_DATA', () => {
    const successAction = {
      type: act.CLEAR_DATA,
    };
    expect(reducer({ data, name: 'Alexeyvax' }, successAction)).toEqual(initStateGetData);
  });
});
