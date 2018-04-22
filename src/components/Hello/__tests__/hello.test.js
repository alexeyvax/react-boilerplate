import React from 'react';
import { mount } from 'enzyme';
import Hello from '../';
import { data } from '../../../../mocks';

describe('check name', () => {
  const name = 'alexeyvax';
  const onGetData = jest.fn();
  const onClearData = jest.fn();

  describe('check component without data', () => {
    const component = mount((
      <Hello
        data={{}}
        name={name}
        onGetData={onGetData}
        onClearData={onClearData}
      />
    ));

    it('check mount component Hello', () => {
      expect(component.find(Hello).length).toEqual(1);
    });

    it('check name in component Hello', () => {
      expect(component.find('h1').text()).toEqual('Hello alexeyvax');
    });

    it('check button in component Hello', () => {
      expect(component.find('button.testing').length).toEqual(1);
      expect(component.find('button.testing').text()).toEqual('Get data');
    });

    it('check list', () => {
      expect(component.find('ol').length).toEqual(0);
    });
  });

  describe('check component with data', () => {
    const component = mount((
      <Hello
        data={data}
        name={name}
        onGetData={onGetData}
        onClearData={onClearData}
      />
    ));

    it('check list', () => {
      expect(component.find('ol').length).toEqual(1);
    });

    it('check li', () => {
      const li = component.find('li');
      expect(li.length).toEqual(Object.keys(data).length);
    });

    it('check clear button', () => {
      expect(component.find('button.clear').length).toEqual(1);
      expect(component.find('button.clear').text()).toEqual('Clear data');
    });
  });
});
