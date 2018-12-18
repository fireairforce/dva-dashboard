import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Main from './routes/main';
import Login from './components/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
