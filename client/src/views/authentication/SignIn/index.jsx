import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as actionType from '../../../store/actions/actionTypes';
import { signIn } from '../../../services/authentication';

const SignUp = props => {
  const [inputText, setInputText] = useState({
    email: '',
    password: ''
  });

  let history = useHistory();

  const handleFormSubmission = e => {
    e.preventDefault();
    const { email, password } = inputText;
    const body = { email, password };

    signIn(body)
      .then(data => {
        //UPDATE REDUX STATE WITH USER INFORMATION
        console.log('signing in in frontend', data);
        props.onSignIn(data.user);

        data.user.role === 'admin' ? history.push('/admin') : history.push(`/user/${data.user._id}`)
      })
      .catch(err => {
        console.log('error', err);
      });
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputText(() => ({ ...inputText, [name]: value }));
  };
  return (
    <>
      <h1>Sign in</h1>
      <Link to="/">Home</Link>
      <form onSubmit={handleFormSubmission}>
        <input
          type="email"
          required
          placeholder="Email"
          onChange={handleInputChange}
          value={inputText.email}
          name="email"
        />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={handleInputChange}
          value={inputText.password}
          name="password"
          autoComplete="on"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

const mapStateTopProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: user => dispatch({ type: actionType.LOGIN, user })
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(SignUp);
