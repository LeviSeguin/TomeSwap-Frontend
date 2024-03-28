import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import searchImage from './search.png'; // Import the search image


function Header() {
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
          <li id={styles.SignInLink}><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
