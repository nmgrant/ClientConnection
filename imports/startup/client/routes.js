import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';
import { Search } from '../../ui/pages/search';
import { Ratings } from '../../ui/pages/ratings';
import { Support } from '../../ui/pages/support';
import { Application } from '../../ui/pages/application';
import { Account } from '../../ui/pages/account';

const requireAuth = (nextState, replace) => {
  
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="search" path="/search" component={ Search } onEnter={requireAuth} />
        <Route name="ratings" path="/ratings" component={ Ratings } onEnter={requireAuth} />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
	<Route name = "support" path= "/support" component={ Support } /> 
	<Route name = "application" path= "/application" component= { Application } />
        <Route name="account" path="/account" component={ Account } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
