import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as act from '../../actions';
import Hello from '../Hello';
import { data } from '../../../mocks';

const store = configureMockStore()({ data: { data } });

describe('AddTodo', () => {
  const onGetData = () => ({ type: act.GET_DATA });
  const onClearData = () => ({ type: act.CLEAR_DATA });
  let wrapper;

  beforeEach(() => {
    wrapper = mount((
      <Provider store={store}>
        <Hello />
      </Provider>));
  });

  it('render the connected component Hello', () => {
    expect(wrapper.find(Hello).length).toEqual(1);
  });

  it('call actions', () => {
    const spy = jest.spyOn(store, 'dispatch');

    spy(onGetData());
    expect(spy).toHaveBeenCalledWith({ type: act.GET_DATA });

    spy(onClearData());
    expect(spy).toHaveBeenCalledWith({ type: act.CLEAR_DATA });

    const actions = store.getActions();
    const expectedPayload = [{ type: act.GET_DATA }, { type: act.CLEAR_DATA }];
    expect(actions).toEqual(expectedPayload);

    spy.mockReset();
    spy.mockRestore();
  });
});
