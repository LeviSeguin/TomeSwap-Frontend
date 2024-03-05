import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/ErrorPopup.css'; // Import CSS file

const SERVER_ADDRESS = 'http://10.0.0.35:8000';

// File signatures for common image types
const imageSignatures = {
  'jpg': [0xFF, 0xD8],
  'png': [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A],
 
};

const CreateListing = () => {
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle image upload with security measures
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    
    // Maximum file size limit (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrorMessage('File size exceeds the limit.');
      return;
    }

    const fileType = file.type.split('/')[1]; // Extract file type from MIME type
    const expectedSignature = imageSignatures[fileType];
    if (!expectedSignature) {
      setErrorMessage('Unsupported file type');
      return;
    }

    try {
      // Verify file signature before uploading
      await verifyFileSignature(file, expectedSignature);

      // If file signature is verified, proceed with upload
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(`${SERVER_ADDRESS}/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      // Optionally, update UI based on the response from the server
    } catch (error) {
      console.error('Error uploading image:', error);
      setErrorMessage('An error occurred while uploading the image. Please try again later.');
    }
  };

  // Function to verify file signature
  const verifyFileSignature = (file, expectedSignature) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const view = new Uint8Array(reader.result);
        const signature = view.slice(0, expectedSignature.length);
        for (let i = 0; i < expectedSignature.length; i++) {
          if (signature[i] !== expectedSignature[i]) {
            reject('Invalid file signature');
            return;
          }
        }
        resolve();
      };

      reader.readAsArrayBuffer(file.slice(0, expectedSignature.length));
    });
  };

  // Function to close the error message pop-up
  const closeErrorMessage = () => {
    setErrorMessage('');
  };

  // Function to handle click outside of the error message to close it
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
