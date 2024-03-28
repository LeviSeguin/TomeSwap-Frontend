import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

const Listings = () => {
  return (
    <div className="App">
      <Header />
      <div className = "CenterScreen">
        <div className="listings-content">
          <p>This is the listings page </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Listings;