require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById('app'));
});
