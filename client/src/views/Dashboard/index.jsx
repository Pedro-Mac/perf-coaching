import React, { useEffect } from 'react';

import { connect } from 'react-redux';

const Dashboard = props => {
  useEffect(() => {
    console.log('user on sign in', props.user);
  }, [props.user]);

  return (
    <div>
      {(props.user && <h1>You are logged in</h1>) || (
        <h1>This page is restricted to clients</h1>
      )}
    </div>
  );
};

const mapStateToPros = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToPros)(Dashboard);
