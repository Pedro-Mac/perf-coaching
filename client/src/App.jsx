import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import LandingPage from './views/LandingPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/sign-in" component={SignIn} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
