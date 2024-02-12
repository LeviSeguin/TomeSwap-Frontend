import React from 'react'
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className = {styles.footer}>
      <div className = "CenterScreen">
        <ul className={styles.links}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
