import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from './containers/Hello';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Hello} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
