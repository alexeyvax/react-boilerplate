import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import Page from './containers/Page';
import NotFoundPage from './containers/NotFoundPage';
import './styles/common.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
