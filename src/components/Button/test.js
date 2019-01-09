import React from 'react';
import renderer from 'react-test-renderer';

import Button from '.';

it('renders correctly without optional props', () => {
  const tree = renderer
    .create(<Button handler={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with optional props', () => {
  const tree = renderer
    .create(<Button content="Button name" className="test" handler={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
