import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signOut, loadMe } from './../../services/authentication';
import * as actionType from './../../store/actions/actionTypes';

const Dashboard = props => {
  const history = useHistory();
  useEffect(() => {
    loadMe().then(data => {
      console.log(data);
    });
    console.log('user on sign in', props.user);
  }, [props.user]);

  const handleSignOut = e => {
    e.preventDefault();
    signOut()
      .then(() => {
        console.log('request succeded');
        props.onSignOut(null);
        history.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {(props.user && (
        <>
          <h1>You are logged in</h1> <form></form>
          <Link to="/sign-up">Add user</Link>
          <form onSubmit={handleSignOut}>
            <button>Log out</button>
          </form>
        </>
      )) || <h1>This page is restricted to clients</h1>}
    </div>
  );
};

const mapStateToPros = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: user => dispatch({ type: actionType.LOGOUT, user })
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Dashboard);
