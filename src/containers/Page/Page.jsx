import React from 'react';
import propTypes from 'prop-types';

import Title from '../../components/Title';
import Button from '../../components/Button';

const Page = ({
  data, name, onGetData, onClearData,
}) => {
  const listOfData = Object.keys(data);
  return (
    <React.Fragment>
      {name && <Title name={name} />}
      <Button content="Get data" className="testing" handler={onGetData} />
      {listOfData.length > 0 &&
        <React.Fragment>
          <ol>
            {listOfData.map(key => (
              <li key={key}>{data[key]}</li>
            ))}
          </ol>
          <Button content="Clear data" handler={onClearData} />
        </React.Fragment>
      }
    </React.Fragment>
  );
};

Page.propTypes = {
  data: propTypes.objectOf(propTypes.string).isRequired,
  name: propTypes.string,
  onGetData: propTypes.func.isRequired,
  onClearData: propTypes.func.isRequired,
};

Page.defaultProps = {
  name: null,
};

export default Page;
