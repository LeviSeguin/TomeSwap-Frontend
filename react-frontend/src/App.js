import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs.js';
import Home from './components/Home.js';
import CreateListing from './components/CreateListing.js';
import SignIn from './components/SignIn.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import ContactUs from './components/ContactUs.js';
import SearchResults from './components/SearchResults.js'; 
import 'buffer';
import Listings from './components/Listings.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/createlisting' element={<CreateListing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="/listings" element={<Listings />} />
        <Route path='/search' element={<SearchResults/>} />
      </Routes>
    </Router>
  );
}
export default App;
