import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from './../../../services/authentication';

const SignUp = props => {
  const [inputText, setInputText] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Check if there is user and user is admin
  useEffect(() => {
    if (!props.user || props.user.role !== 'admin')
      throw new Error('Error 404 - Page not found');
  }, [props.user]);

  const history = useHistory();

  const handleFormSubmission = e => {
    e.preventDefault();
    const { name, email, password } = inputText;
    const body = { name, email, password };
    signUp(body);
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputText(() => ({ ...inputText, [name]: value }));
  };
  return (
    <>
      {props.user.role === 'admin' && (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={handleFormSubmission}>
            <input
              type="text"
              required
              placeholder="Name"
              onChange={handleInputChange}
              value={inputText.name}
              name="name"
            />
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
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SignUp);
