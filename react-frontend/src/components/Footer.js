import React from 'react'
import '../styles/Footer.module.css';

function Footer() {
  return (
    <div className = "Footer">
      <div className = "CenterScreen">
        <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
