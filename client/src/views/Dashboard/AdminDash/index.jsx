import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signOut, loadMe } from './../../../services/authentication';
import * as actionType from './../../../store/actions/actionTypes';

const AdminDashboard = props => {
  const history = useHistory();
  const {onSessionOut} = props

  console.log('component rendered')
  useEffect(() => {
    loadMe().then(data=>{
      console.log('show redux user', props.user);
      console.log('show data', data.user);
      if(data.user.role !== 'admin') throw new Error('404 - Page not found')

    })
    .catch(err => {
      console.log('User failed to load')
      onSessionOut(null);
      history.push('/sign-in');
    })
    
  }, [onSessionOut, history]);

  const handleSignOut = e => {
    e.preventDefault();
    signOut()
      .then(() => {
        history.push('/');
        props.onSessionOut(null);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {props.user && (
        <>
          <h1>You are logged in</h1>
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
    onSessionOut: user => dispatch({ type: actionType.LOGOUT, user })
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(AdminDashboard);

