import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.background}>
      <div className="CenterScreen">
        <img src="" alt="" className="Logo" />
        {/* Replace with logo img */}
        <p ><Link id={styles.LogoText} to="/">TomeSwap</Link></p>
        <div>
          <input className={styles.SearchBar} type="text" placeholder="Search listings..." />
        </div>
        <ul className={styles.links}>
          <li><Link to="/listings">Listings</Link></li>
          <li><Link to="/createlisting">Create Listing</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li id={styles.SignInLink}><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
