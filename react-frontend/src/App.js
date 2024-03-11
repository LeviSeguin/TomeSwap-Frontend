import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './components/Pages/AboutUs.js';
import Home from './components/Pages/Home.js';
import CreateListing from './components/Pages/CreateListing.js';
import SignIn from './components/Pages/SignIn.js';
import PrivacyPolicy from './components/Pages/PrivacyPolicy.js';
import ContactUs from './components/Pages/ContactUs.js';
import 'buffer';
import Listings from './components/Pages/Listings.js';

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


      </Routes>
    </Router>
  );
}
export default App;
