import * as act from '../types';

export const getData = () => ({
  type: act.GET_DATA,
});

export const setData = res => ({
  type: act.SET_DATA,
  payload: res,
});

export const clearData = () => ({
  type: act.CLEAR_DATA,
});
