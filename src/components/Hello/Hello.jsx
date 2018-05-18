import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hello = ({
  data, name, theme, onGetData, onClearData,
}) => {
  const listOfData = Object.keys(data);
  return (
    <React.Fragment>
      <h1 className={theme.test}>{`Hello ${name}`}</h1>
      <button
        className={theme.testing}
        type="button"
        onClick={onGetData}
      >
        Get data
      </button>
      {' '}
      <Link href to="/second-page">Go to Second Page!</Link>
      <If condition={listOfData.length}>
        <ol>
          {listOfData.map(key => (
            <li key={key}>{data[key]}</li>
          ))}
        </ol>
        <button
          type="button"
          className="clear"
          onClick={onClearData}
        >
          Clear data
        </button>
      </If>
    </React.Fragment>
  );
};

Hello.propTypes = {
  data: propTypes.objectOf(propTypes.string).isRequired,
  name: propTypes.string,
  theme: propTypes.objectOf(propTypes.string).isRequired,
  onGetData: propTypes.func.isRequired,
  onClearData: propTypes.func.isRequired,
};

Hello.defaultProps = {
  name: 'alexeyvax',
};

export default Hello;
