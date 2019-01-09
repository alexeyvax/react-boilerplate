import React from 'react';
import propTypes from 'prop-types';

import theme from './theme.scss';

const Button = ({ content, className, handler }) => (
  <button
    className={theme[className]}
    type="button"
    onClick={handler}
  >
    {content}
  </button>
);

Button.propTypes = {
  content: propTypes.string,
  className: propTypes.string,
  handler: propTypes.func.isRequired,
};

Button.defaultProps = {
  content: 'button',
  className: null,
};

export default Button;
