import React from 'react';
import propTypes from 'prop-types';

import theme from './theme.scss';

const Title = ({ name }) => (
  <h1 className={theme.test}>{`Hello ${name}`}</h1>
);

Title.propTypes = {
  name: propTypes.string.isRequired,
};

export default Title;
