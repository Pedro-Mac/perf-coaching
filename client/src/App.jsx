import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMe } from './services/authentication';

import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './views/authentication/SignUp';
import SignIn from './views/authentication/SignIn';
import LandingPage from './views/LandingPage';
import AdminDashboard from './views/Dashboard/AdminDash';
import UserDashboard from './views/Dashboard/UserDash'
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

        onSessionDenied(null);
      });
  }, [onSessionVerified, onSessionDenied]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path="/sign-in" render={props => <SignIn {...props}/>} user={props.user}/>
          <Route path="/" component={LandingPage} exact />
          <Route path="/admin" component={AdminDashboard} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/sign-in" component={SignIn} exact />
          {/* <Route path='/user/:id' component={UserDashboard}/> */}
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
