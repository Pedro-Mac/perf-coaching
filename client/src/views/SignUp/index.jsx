import React, { useState } from 'react';

import { signUp } from './../../services/authentication';

const SignUp = () => {
  const [inputText, setInputText] = useState({
    name: '',
    email: '',
    password: ''
  });

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
  );
};

export default SignUp;
