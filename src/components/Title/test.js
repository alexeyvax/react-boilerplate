import React from 'react';
import renderer from 'react-test-renderer';

import Title from '.';

it('renders correctly Title component', () => {
  const tree = renderer
    .create(<Title name="Test-name" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
