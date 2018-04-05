import * as act from '../actions';

const initialState = {
  data: {},
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case act.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case act.CLEAR_DATA:
      return {
        ...state,
        data: initialState.data,
      };

    default:
      return state;
  }
}
