import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className = "Header">
      <img src="" alt="" className = "Logo"/>
      <h1>TomeSwap</h1>

      <div className = "SearchBar">
        <input type = "text" placeholder = "Search listings..." />
      </div>

      <ul>
        <li><a href="">Listings</a></li>
        <li><a href="">Create Listing</a></li>
        <li><a href="">About Us</a></li>
      </ul>
    </div>
  )
}

export default Header
