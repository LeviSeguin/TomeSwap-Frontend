import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

const ProfilePage = () => {
  return (
    <div className="App">
      <Header />
      <div className="CenterScreen">
        <div className="ProfilePage">
            <p>This is the profile page</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProfilePage;