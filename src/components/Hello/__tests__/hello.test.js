import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Hello from '../';
import { data } from '../../../../mocks';

describe('check name', () => {
  const name = 'alexeyvax';
  const onGetData = jest.fn();
  const onClearData = jest.fn();

  describe('check component without data', () => {
    const component = mount((
      <MemoryRouter initialEntries={['/second-page']}>
        <Hello
          data={{}}
          name={name}
          onGetData={onGetData}
          onClearData={onClearData}
        />
      </MemoryRouter>
    ));

    it('check mount component Hello', () => {
      expect(component.find(Hello).length).toEqual(1);
    });

    it('check name in component Hello', () => {
      expect(component.find('h1').text()).toEqual('Hello alexeyvax');
    });

    it('check button in component Hello', () => {
      expect(component.find('button').length).toEqual(1);
      expect(component.find('button').text()).toEqual('Get data');
    });

    it('check list', () => {
      expect(component.find('ol').length).toEqual(0);
    });
  });

  describe('check component with data', () => {
    const component = mount((
      <MemoryRouter initialEntries={['/second-page']}>
        <Hello
          data={data}
          name={name}
          onGetData={onGetData}
          onClearData={onClearData}
        />
      </MemoryRouter>
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
