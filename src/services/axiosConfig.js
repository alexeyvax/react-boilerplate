import axios from 'axios';
import { config } from '../../config';

const instance = axios.create({
  baseURL: config.API_PREFIX,
  headers: {
    // fix for IE (IE caches requests)
    Pragma: 'no-cache',
    'Cache-control': 'no-cache',
  },
});

export default instance;
