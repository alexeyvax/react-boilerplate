import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import Hello from './containers/Hello';
import SecondPage from './components/SecondPage';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/second-page" component={SecondPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
