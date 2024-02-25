import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import HorizontalScrollList from './HorizontalScrollList.js';

//testing fetch
async function fetchData() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/test/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


function Home() {

  let fetchedData;
    // Fetch data when component mounts
    React.useEffect(() => {
      fetchData().then(data => {
        console.log('Fetched data:', data);
        console.log('just content:', data.content)
        fetchedData = "test";
        // Handle data here
      });
    }, []); // Empty dependency array to run effect only once on component mount

    const items = [
      <div className="item-content"><p>{fetchedData || 'Loading...'}</p></div>,
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
        <HorizontalScrollList  items={items} />
      </div>

      <div className="list">
        <HorizontalScrollList  items={items} />
      </div>

      <Footer />
    </div>
  );
}
export default Home;
