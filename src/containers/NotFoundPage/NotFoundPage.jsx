import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <React.Fragment>
    <h2>This is a Not Found Page 404!</h2>
    <Link to="/">Go to main page</Link> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
  </React.Fragment>
);

export default NotFoundPage;
