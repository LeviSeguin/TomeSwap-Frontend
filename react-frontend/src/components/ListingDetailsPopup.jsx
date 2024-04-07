import React, { useState, useEffect } from "react";
import { BACKEND_ADDRESS } from "./config";

function ListingDetailsPopup({ listing, onClose }) {
  const [userEmail, setUserEmail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status

  const fetchUserEmail = async () => {
    try {
      const response = await fetch(
        `${BACKEND_ADDRESS}/api/get_user_email/?username=${listing.username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any necessary authentication headers if required
          },
          credentials: "include", // Include credentials in the request
        }
      );
      const data = await response.json();
      setUserEmail(data.email); // Assuming the response contains an email field
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  // Function to check if user is logged in
  const checkLoggedIn = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true if user is logged in
  };

  // Call the checkLoggedIn function when the component mounts to check the user's login status
  useEffect(() => {
    checkLoggedIn();
  }, []);

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={listing.thumbnail} alt={listing.title} />
        {isLoggedIn && ( // Render the button only if user is logged in
          <button
            style={{ marginTop: "10px" }}
            className="view-email-button"
            onClick={fetchUserEmail}
          >
            View Email
          </button>
        )}
      </div>
      {userEmail && <p className="popup-card-text">User Email: {userEmail}</p>}
    </div>
  );
}

export default ListingDetailsPopup;
