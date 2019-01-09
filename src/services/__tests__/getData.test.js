import sinon from 'sinon';
import Axios from 'axios';

import api from '../data';
import { data } from '../../../mocks';

describe('Services/API/getData', () => {
  it('should build correct request for get data', (done) => {
    const AxiosGet = sinon.stub(Axios, 'get').resolves({ data });

    api.getData()
      .then((res) => {
        expect(res).toEqual(data);
        expect(Axios.get.calledOnce).toBeTruthy();
        expect(Axios.get.calledWith('/api/get-test-data')).toBeTruthy();
        AxiosGet.restore();
        done();
      })
      .catch(done);
  });
});
