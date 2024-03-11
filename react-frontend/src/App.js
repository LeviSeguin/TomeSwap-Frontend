import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs.js';
import Home from './components/Home.js';
import CreateListing from './components/CreateListing.js';
import SignIn from './components/SignIn.js';
import 'buffer';
import ProfilePage from './components/ProfilePage.js';
function App() {
  const userId = 1;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/createlisting' element={<CreateListing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/profile" element={<ProfilePage userId={userId} />} /> {/* Add ProfilePage route */}

      </Routes>
    </Router>
  );
}

export default App;
