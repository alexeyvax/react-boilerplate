import Axios from './axiosConfig';
import { config } from '../../config';

export default {
  getData() {
    return Axios.get(config.GET_TEST_DATA)
      .then(res => res.data)
      .catch((error) => { throw error.response; });
  },
};
