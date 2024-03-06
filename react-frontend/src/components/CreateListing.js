import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/ErrorPopup.css'; // Import CSS file

const SERVER_ADDRESS = 'http://10.0.0.35:8000';

const CreateListing = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [ocrData, setOcrData] = useState(null); // State to hold OCR data

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    
    const maxSize = 10 * 1024 * 1024; // Maximum file size limit (10MB)
    if (file.size > maxSize) {
      setErrorMessage('File size exceeds the limit.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(`${SERVER_ADDRESS}/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Image uploaded successfully:', response.data);
      
      // Set OCR data received from the backend
      setOcrData(response.data.text_data);
    } catch (error) {
      console.error('Error uploading image:', error);
      setErrorMessage('An error occurred while uploading the image. Please try again later.');
    }
  };

  const closeErrorMessage = () => {
    setErrorMessage('');
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('error-popup')) {
      closeErrorMessage();
    }
  };

  return (
    <div className="App" onClick={handleClickOutside}>
      <Header />
      <div style={{ textAlign: 'left', marginLeft: '20%' }}>
        <p>Create Listing Page</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginLeft: '0.5rem' }} />
      </div>
      <Footer />

      {/* Error message pop-up */}
      {errorMessage && (
        <div className="error-popup">
          <div className="error-popup-content">
            <span className="close-button" onClick={closeErrorMessage}>&times;</span>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateListing;