import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
      <div className = {styles.background}>
        <div className = "CenterScreen">
          <img src="" alt="" className = "Logo"/>

          {/*replace with logo img */}
          <p id={styles.LogoText}>TomeSwap</p>

          <div>
            <input className = {styles.SearchBar} type = "text" placeholder = "Search listings..." />
          </div>

          <ul className = {styles.links}>
            <li><a href="">Listings</a></li>
            <li><a href="">Create Listing</a></li>
            <li><a href="">About Us</a></li>
            <li id={styles.SignInLink}><a href="">Sign In</a></li>
          </ul>
        </div>
        
      </div>


  )
}

export default Header
