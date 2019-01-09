import React from 'react';
import renderer from 'react-test-renderer';

import { data } from '../../../mocks';
import Page from './Page';

it('renders correctly without optional props', () => {
  const props = {
    data,
    onGetData: jest.fn(),
    onClearData: jest.fn(),
  };
  const tree = renderer
    .create(<Page {...props} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with optional props', () => {
  const props = {
    data,
    name: 'test-name',
    onGetData: jest.fn(),
    onClearData: jest.fn(),
  };
  const tree = renderer
    .create(<Page {...props} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with empty data prop', () => {
  const props = {
    data: {},
    onGetData: jest.fn(),
    onClearData: jest.fn(),
  };
  const tree = renderer
    .create(<Page {...props} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
