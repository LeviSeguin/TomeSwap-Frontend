import React, { useState } from "react";
import axios from "axios";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../styles/ErrorPopup.css"; // Import CSS file
import Swal from 'sweetalert2'

const SERVER_ADDRESS = "http://10.0.0.35:8000";

const CreateListing = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [ocrData, setOcrData] = useState(null); // State to hold OCR data
  const [bookDetails, setBookDetails] = useState(null); // State to hold book details
  const [uploadedImage, setUploadedImage] = useState(null); // Initialize uploadedImage state to null

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    // Check file size
    const maxSize = 10 * 1024 * 1024; // Maximum file size limit (10MB)
    if (file.size > maxSize) {
      setErrorMessage("File size exceeds the limit.");
      return;
    }

    // Read the first few bytes of the file to determine its signature
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const arr = new Uint8Array(fileReader.result).subarray(0, 4);
      const header = arr.reduce((header, byte) => header + byte.toString(16), '');

      // Check if the file signature matches PNG or JPG
      if (header.startsWith("89504e47")) {
        // PNG file signature
        uploadImage(file);
      } else if (header.startsWith("ffd8")) {
        // JPG file signature
        uploadImage(file);
      } else {
        setErrorMessage("Unsupported file format. Only PNG and JPG files are allowed.");
      }
    };
    fileReader.readAsArrayBuffer(file);
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(`${SERVER_ADDRESS}/upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Image uploaded successfully:", response.data);

      // Set OCR data received from the backend
      setOcrData(response.data.text_data);
      // Set book details received from the backend
      setBookDetails(response.data.book_details);
      // Set uploaded image
      setUploadedImage(URL.createObjectURL(file));
    } catch (error) {
      console.error("Error uploading image:", error);
      setErrorMessage(
        "An error occurred while uploading the image. Please try again later."
      );
    }
  };

  const closeErrorMessage = () => {
    setErrorMessage("");
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("error-popup")) {
      closeErrorMessage();
    }
  };

  

  const handleYesClick = async () => {
    console.log("Data being sent:", bookDetails);
  
    // Check if bookDetails is available
    if (bookDetails) {
      try {
        // Make call to backend 
        const response = await axios.post(
          `${SERVER_ADDRESS}/save-book/`,
          {
            title: bookDetails.title,
            authors: bookDetails.authors,
            categories: bookDetails.categories,
            thumbnail: bookDetails.thumbnail,
          }
        );
  
        // Handle successful response
        console.log("Book entry created in the database:", response.data);
  
        // Show success popup using SweetAlert2
        Swal.fire({
          title: 'Success!',
          text: 'Listing has been successfully made and stored in our database!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
  
      } catch (error) {
        console.error("Error creating book entry:", error);
      }
    }
  };
  
  
  const handleNoClick = () => {
    console.log("No button clicked");
  };

  return (
    <div className="App" onClick={handleClickOutside}>
      <Header />
      <div style={{ textAlign: "left", marginLeft: "20%" }}>
        <p style={{ fontSize: "1.2rem" }}>Create Listing</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginLeft: "0rem" }}
        />
      </div>
      <Footer />

      {bookDetails && (
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", marginTop: "20px", marginLeft: "20%" }}>
          <div style={{ marginRight: "20px" }}>
            {bookDetails.thumbnail !== "N/A" && ( // Render book thumbnail if available
              <img src={bookDetails.thumbnail} alt="Book Cover" style={{ height: "auto", maxWidth: "158px", marginBottom: "20px" }} />
            )}
            {bookDetails.thumbnail === "N/A" && uploadedImage && ( // Render uploaded image if book thumbnail is "N/A"
              <img src={uploadedImage} alt="Uploaded" style={{ height: "auto", maxWidth: "158px", marginBottom: "20px" }} />
            )}
            <p>Is this your book?</p>
            <button onClick={handleYesClick}>Yes</button>
            <span style={{ margin: "0 10px" }}></span>
            <button onClick={handleNoClick}>No</button>
          </div>
          <div>
            <p style={{ fontSize: "1rem", marginBottom: "2px" }}>Title: {bookDetails.title}</p>
            <p style={{ fontSize: "1rem", marginBottom: "2px" }}>Author: {bookDetails.authors}</p>
            <p style={{ fontSize: "1rem", marginBottom: "2px" }}>Category: {bookDetails.categories}</p>
            <p style={{ fontSize: "1rem", marginBottom: "10px" }}>Description: {bookDetails.description}</p>
          </div>
        </div>
      )}

      {/* Error message pop-up */}
      {errorMessage && (
        <div className="error-popup" style={{ marginTop: "20px" }}>
          <div className="error-popup-content">
            <span className="close-button" onClick={closeErrorMessage}>
              &times;
            </span>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateListing;
