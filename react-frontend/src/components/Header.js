import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import searchImage from './search.png'; // Import the search image


function Header() {
  // Retrieve the value of isLoggedIn from sessionStorage
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  //logout button
  const handleSignOut = () => {
    // Call the signout API endpoint
    fetch('http://127.0.0.1:8000/logout/', {
      method: 'POST',
      credentials: 'include' // Include credentials (e.g., session cookie)
    })
    .then(response => {
      if (response.ok) {
        // Redirect to the home page or another appropriate page after signout
        console.log("signed out");
        //delete session data, like username
        sessionStorage.clear();
        //refresh window to update header links
        window.location.reload();
      } else {
        // Handle signout failure (e.g., show error message)
        console.error('Signout failed');
      }
    })
    .catch(error => {
      console.error('Error during signout:', error);
    });
  };

  return (
    <div className={styles.background}>
      <div className="CenterScreen">
        <img src="" alt="" className="Logo" />
        {/* Replace with logo img */}
        <p id={styles.LogoText}>TomeSwap</p>
        <div className={styles.searchButtonContainer}>
          {/* Use the search image as a link */}
          <Link to="/search" className={styles.searchButton}>
            <img src={searchImage} alt="Search" />
          </Link>
        </div>
        <ul className={styles.links}>
          <li><Link to="/">Listings</Link></li>
          <li><Link to="/createlisting">Create Listing</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          {/*dynamic rendering of sign in page*/}
          {isLoggedIn ? (
            <li><Link to="/profile">Profile</Link></li>
          ) : (
            <li id={styles.SignInLink}><Link to="/signin">Sign In</Link></li>
          )}

          {isLoggedIn && ( // Render the logout button only if the user is signed in
            <li><Link to="/" onClick={handleSignOut}>Sign Out</Link></li>
          )}
          

          
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
