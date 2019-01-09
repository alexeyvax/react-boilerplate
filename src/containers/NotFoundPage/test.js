import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import NotFoundPage from './NotFoundPage';

it('renders correctly', () => {
  const tree = renderer
    .create((
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
