import axios from 'axios';

export default {
  getData() {
    return axios.get('/api/get-test-data')
      .then(res => res.data)
      .catch((error) => { throw error.response; });
  },
};
