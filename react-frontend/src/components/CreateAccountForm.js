import React, { useState } from 'react';
import '../styles/CreateAccountForm.css';

const CreateAccountForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // You can perform additional validation or submit data to a server here
    console.log('Submitting...', { username, email, password });
    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <p>Create an Account</p>
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
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
      <button type="submit">Create Account</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default CreateAccountForm;
