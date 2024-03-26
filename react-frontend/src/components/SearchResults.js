import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { BACKEND_ADDRESS } from './config';
import '../styles/Listings.css'; // Import CSS file for styling
import ListingDetailsPopup from './ListingDetailsPopup.jsx';

function Listings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BACKEND_ADDRESS}/search-listings?q=${searchQuery}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear search results when search query is empty
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleListingClick = (listing) => {
    console.log("Listing clicked:", listing); // Log clicked listing data
    setShowPopup(true);
    setSelectedListing(listing);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedListing(null);
  };

  return (
    <div className='App'>
      <Header />
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Search listings..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '400px',
            marginLeft: '400px',
          }}
        />
      </div>
      {loading ? (
        <p>Loading search results...</p>
      ) : (
        <ul className="listings-grid">
          {searchResults.map((listing) => (
            <li key={listing.listingid} className="listing-item" onClick={() => handleListingClick(listing)}>
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
      )}
      {showPopup && (
        <ListingDetailsPopup listing={selectedListing} onClose={handlePopupClose} />
      )}
      <Footer />
    </div>
  );
}

export default Listings;
