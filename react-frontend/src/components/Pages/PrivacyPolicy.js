import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

const PrivacyPolicy = () => {
  return (
    <div className="App">
      <Header />
      <div className="CenterScreen">
        <div className="PrivacyPolicy">
            <p>This is the privacy policy</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;