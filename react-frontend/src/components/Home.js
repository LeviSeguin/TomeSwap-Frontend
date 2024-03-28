import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../styles/Listings.css"; // Import CSS file for styling
import { BACKEND_ADDRESS } from "./config";
import ListingDetailsPopup from "./ListingDetailsPopup.jsx";

function Listings() {
  const [listings, setListings] = useState([]);
  const [response, setResponse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_ADDRESS}/fetch-listings/`);
        setResponse(response);
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchData();
  }, []);

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
    <div className="App">
      <Header />
      {listings.length > 0 ? (
        <ul className="listings-grid">
          {listings.map((listing) => (
            <li
              key={listing.listingid}
              className="listing-item"
              onClick={() => handleListingClick(listing)}
            >
              <div className="listing-content">
                <h3>{listing.title}</h3>
                <p>by: {listing.authors}</p>
                <p>category: {listing.categories}</p>
                <img src={listing.thumbnail} alt={listing.title} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading listings...</p>
      )}

      {showPopup && (
        <ListingDetailsPopup
          listing={selectedListing}
          onClose={handlePopupClose}
        />
      )}

      <Footer />
    </div>
  );
}

export default Listings;
