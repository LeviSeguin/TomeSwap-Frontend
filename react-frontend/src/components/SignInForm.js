import React, { useState } from 'react';
import '../styles/SignInForm.css';
import Swal from 'sweetalert2'; // Import SweetAlert

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      //get response data
      const responseData = await response.json();
      
      //if status from response is not ok, log error and return
      if (!response.ok) {
        let errorMessage;
      
        
        try {
          errorMessage = responseData.error; 
        } catch (error) {
          errorMessage = 'An unexpected error occurred.'; 
        }
      
        setError(errorMessage); 
        console.error("Detailed server error:", responseData); 
        return;
      }
      
      // If status from response is ok, show success popup
      Swal.fire({
        title: 'Success!',
        text: 'Sign-in was successful!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      
      
      //if status from response is ok, log message, reset fields
      console.log('message from server:', responseData);
      // Reset form fields
      setUsername('');
      setPassword('');
      setError('');
   
      //idk what this does
    } catch (error) {
      console.error('Error submitting registration:', error.message);
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
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
      {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default  SignInForm;
