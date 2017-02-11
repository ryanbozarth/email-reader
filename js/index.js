require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import MailboxList from './components/mailbox-list'
import EmailList from './components/email-list'
import Email from './components/email'
import NoEmails from './components/no-emails'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NoEmails} />
      <Route path="/:mailbox" component={EmailList} />
      <Route path="/:mailbox/:emailId" component={Email}/>
    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById('app'));
});
