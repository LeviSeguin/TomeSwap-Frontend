import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

const ContactUs = () => {
  return (
    <div className="App">
      <Header />
      <div className="CenterScreen">
        <div className="ContactUs">
            <p>This is the Contact Us page</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;