import React from 'react';
import propTypes from 'prop-types';
import theme from './theme.scss';

const Hello = ({
  data, name, onGetData, onClearData,
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
  onGetData: propTypes.func.isRequired,
  onClearData: propTypes.func.isRequired,
};

Hello.defaultProps = {
  name: 'alexeyvax',
};

export default Hello;
