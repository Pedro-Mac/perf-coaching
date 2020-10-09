import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signOut } from './../../../services/authentication';
import * as actionType from './../../../store/actions/actionTypes';

const AdminDashboard = props => {
  const history = useHistory();
  useEffect(() => {
    if (!props.user) throw new Error('No user signed in');
  }, [props.user]);

  const handleSignOut = e => {
    e.preventDefault();
    signOut()
      .then(() => {
        history.push('/');
        props.onSignOut(null);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {props.user && (
        <>
          <h1>You are logged in</h1> <form></form>
          {props.user.role === 'admin' && <Link to="/sign-up">Add user</Link>}
          <form onSubmit={handleSignOut}>
            <button>Log out</button>
          </form>
        </>
      )}
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

export default connect(mapStateToPros, mapDispatchToProps)(AdminDashboard);

