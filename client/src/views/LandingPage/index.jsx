import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LandingPage = props => {
  return (
    <div>
      <h1>Landing Page</h1>
      {(!props.user && <Link to="/sign-in">Sign in</Link>) || (
        <Link to="/me">Dashboard</Link>
      )}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    user: state.user
  };
};

export default connect(mapPropsToState)(LandingPage);
