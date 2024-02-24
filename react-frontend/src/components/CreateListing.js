import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

const CreateListing = () => {
  const [imageSrc, setImageSrc] = useState(null);

  // Function to handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      // Optionally, update UI based on the response from the server
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error
    }
  };

  return (
    <div className="App">
      <Header />
      <p>Create Listing Page</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%' }} />}
      <Footer />
    </div>
  );
}

export default CreateListing;