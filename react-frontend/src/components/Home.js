import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/Listings.css'; // Import CSS file for styling
import { BACKEND_ADDRESS } from './config';

function Listings() {
  const [listings, setListings] = useState([]); // State to store fetched listings
  const [response, setResponse] = useState(null); // State to store the response object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_ADDRESS}/fetch-listings/`);        
        setResponse(response); // Log the entire response object
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array fetch data once

  return (
    <div>
      <Header /> 

      {listings.length > 0 ? (
        <ul className="listings-grid"> 
          {listings.map((listing) => (
            <li key={listing.listingid} className="listing-item"> 
              <div className="listing-content"> 
                <h3>{listing.title}</h3>
                <p>by: {listing.authors}</p>
                <p>category: {listing.categories}</p>
                <p>listed by: {listing.username}</p>
                <img src={listing.thumbnail} alt={listing.title} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading listings...</p>
      )}
      <Footer /> 
    </div>
  );
}

export default Listings;
