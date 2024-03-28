import React, { useState } from 'react';
import '../styles/CreateAccountForm.css';

const CreateAccountForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://127.0.0.1:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      //get response data
      const responseData = await response.json();
      
      //if status from response is not ok, log error and return
      if (!response.ok) {
        setError('Problem from server: check console');
        console.log("from server: ", responseData)
        return;
      }
      
      //if status from response is ok, log message, reset fields
      console.log('From server: ', responseData);
      // Reset form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
  
      //idk what this does
    } catch (error) {
      console.error('From frontend: Error submitting registration:', error.message);
      // Handle error, e.g., display error message to the user
    }
  };
  

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <button type="submit">Create Account</button>
      {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default CreateAccountForm;
