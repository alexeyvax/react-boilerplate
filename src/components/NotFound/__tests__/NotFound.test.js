import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../';

describe('check NotFound', () => {
  const component = mount((
    <MemoryRouter initialEntries={['/']}>
      <NotFound />
    </MemoryRouter>
  ));

  it('check mount component NotFound', () => {
    expect(component.find(NotFound).length).toEqual(1);
  });

  it('check title in component NotFound', () => {
    expect(component.find('h1').text()).toEqual('Not Found page 404!');
  });
});
