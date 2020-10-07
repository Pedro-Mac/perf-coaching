import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionType from './../../store/actions/actionTypes';
import { signIn } from './../../services/authentication';

const SignUp = () => {
  const [inputText, setInputText] = useState({
    email: '',
    password: ''
  });

  const handleFormSubmission = e => {
    e.preventDefault();
    const { email, password } = inputText;
    const body = { email, password };

    signIn(body).then(data => {
      console.log(data);
      //UPDATE REDUX STATE WITH USER INFORMATION
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
    onSignIn: () => dispatch({ type: actionType.LOGIN })
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(SignUp);
