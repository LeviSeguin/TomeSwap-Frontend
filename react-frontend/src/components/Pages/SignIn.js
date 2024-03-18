import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';
import SignInForm from '../SignInForm.js';
import CreateAccountForm from '../CreateAccountForm.js';
import '../../styles/SignIn.css'

//TODO: switch to css modules, currently the css for SignInForm and CreateAccountForm overlap

const SignIn = () => {

  return (
    <div className="App">
      <Header />
      <div className="signInPage">

          <div className="signInContainer">
            <div className="signInSection">
              <h2>Sign In</h2>
              <SignInForm />
            </div>
            <div className="verticalLine"></div>
            <div className="createAccountSection">
              <h2>Create Account</h2>
              <CreateAccountForm />
            </div>
          </div>

      </div>
      <Footer />

    </div>
  );
}

export default SignIn;
