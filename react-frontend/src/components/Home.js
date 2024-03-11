import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import HorizontalScrollList from './HorizontalScrollList.js';
import { useState, useEffect } from 'react';


function Home() {

// State to store the fetched data
const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to fetch data from a URL
        const response = await fetch('http://127.0.0.1:8000/api/test/');
        
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Parse the JSON response
        const jsonData = await response.json();
        
        // Set the fetched data to the state
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up function to cancel any pending fetch request when the component unmounts
    return () => {
      // Any cleanup code here, such as cancelling ongoing fetch requests
    };
  }, []); // Empty dependency array means this effect runs only once, after the initial render
  console.log(data)

  const items = [
    <div className="item-content">{data.content}</div>,
    <div className="item-content">Item 2</div>,
    <div className="item-content">Item 3</div>,
    <div className="item-content">Item 4</div>,
    <div className="item-content">Item 5</div>,
    <div className="item-content">Item 5</div>,
    <div className="item-content">Item 5</div>,
  ];
  

  return (

    <div className="App">
      <Header />
      <div className="list">
        <HorizontalScrollList items = {items}></HorizontalScrollList>
      </div>

      <div className="list">
      <HorizontalScrollList items = {items}></HorizontalScrollList>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
