import React, { useState } from 'react';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    // You can perform additional validation or submit data to a server here
    console.log('Submitting...', { username, password });
    // Reset form fields
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default  SignInForm;
