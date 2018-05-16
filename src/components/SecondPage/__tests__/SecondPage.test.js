import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SecondPage from '../';

describe('check SecondPage', () => {
  const component = mount((
    <MemoryRouter initialEntries={['/']}>
      <SecondPage />
    </MemoryRouter>
  ));

  it('check mount component SecondPage', () => {
    expect(component.find(SecondPage).length).toEqual(1);
  });

  it('check title in component SecondPage', () => {
    expect(component.find('h1').text()).toEqual('This is the Second Page!');
  });
});
