import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  const [inputText, setInputText] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleFormSubmission = e => {
    e.preventDefault();
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputText(() => ({ ...inputText, [name]: value }));
  };

  return (
    <div className="App">
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
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
