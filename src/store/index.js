import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development' && process.env.WITH_LOG) {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
