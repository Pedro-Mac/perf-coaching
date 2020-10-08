import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMe } from './services/authentication';

import SignUp from './views/authentication/SignUp';
import SignIn from './views/authentication/SignIn';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import * as actionTypes from './store/actions/actionTypes';

import './App.css';

const App = props => {
  const { onSessionVerified, onSessionDenied } = props;
  useEffect(() => {
    loadMe()
      .then(data => {
        onSessionVerified(data.user);
      })
      .catch(err => {
        console.log(err);
        onSessionDenied(null);
      });
  }, [onSessionVerified, onSessionDenied]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/me" component={Dashboard} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/sign-in" component={SignIn} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSessionVerified: user => dispatch({ type: actionTypes.LOGIN, user }),
    onSessionDenied: user => dispatch({ type: actionTypes.LOGOUT, user })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
