import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';
import { useState } from 'react';
import SignInForm from '../SignInForm.js';
import CreateAccountForm from '../CreateAccountForm.js';


const SignIn = () => {
  
  return (
    <div className="App">
      <Header />
      <div className="CenterScreen">
        <p>Sign In Page</p>
        <SignInForm></SignInForm>
        <div className="verticalLine"></div>
        <CreateAccountForm></CreateAccountForm>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
