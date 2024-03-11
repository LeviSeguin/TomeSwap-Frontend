import React from 'react'
import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className = {styles.footer}>
      <div className = "CenterScreen">
        <ul className={styles.links}>
          <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
