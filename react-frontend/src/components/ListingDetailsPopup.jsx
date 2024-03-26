import React from 'react';

function ListingDetailsPopup({ listing, onClose }) {
  console.log('Listing details:', listing); // Log the listing object

  return (
    <div className="popup-card">
      <div className="popup-header">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-card-text">{listing.title}</h2>
      </div>
      <p className="popup-card-text">by: {listing.authors}</p>
      <p className="popup-card-text">listed by: {listing.username}</p>
      <p className="popup-card-text">{listing.description}</p>
      <img src={listing.thumbnail} alt={listing.title} />
    </div>
  );
}

export default ListingDetailsPopup;
