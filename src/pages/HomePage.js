import React from 'react';
import Header from '../components/Header';
import Hero from '../Hero';
import Footer from '../Footer';
import '../CSS/Main.css';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
