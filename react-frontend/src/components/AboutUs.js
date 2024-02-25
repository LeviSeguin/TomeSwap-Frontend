import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

const AboutUs = () => {
  return (
    <div className="App">
      <Header />
      <div className="about-us-content">
        <p>Welcome to TomeSwap, your premier destination for exchanging books with fellow book lovers! Our platform was created with the vision of fostering a community of avid readers who share a passion for literature and learning.</p>
        <p>At BookSwap, we believe that every book tells a story, not just through its pages but also through the connections it creates between readers. Whether you're looking to discover new authors, share your favorite novels, or simply connect with like-minded individuals, BookSwap provides the perfect platform to do so.</p>
        <p>Our mission is to make book swapping easy, convenient, and enjoyable for everyone. With our user-friendly interface, you can browse through a diverse collection of books, connect with other users, and arrange book exchanges with just a few clicks.</p>
        <p>Join us in our journey to celebrate the joy of reading and build a community where books are cherished, shared, and cherished once again. Happy reading!</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
