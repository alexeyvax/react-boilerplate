import Axios from 'axios';

import config from '../../config';

export default {
  getData() {
    return Axios.get(config.endpoints.GET_TEST_DATA)
      .then(res => res.data)
      .catch((error) => { throw error.response; });
  },
};
