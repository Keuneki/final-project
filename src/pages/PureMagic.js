import React from 'react';
import magicData from '../API/magic.json';
import Images from '../images/index.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PureMagic = () => {
  const pureMagic = magicData.magic.filter(magic => magic.type === 'pure');

  return (
    <div className="container">
      <Header />
      <h2>Pure Magic</h2>
      {pureMagic.map(magic => (
        <div key={magic.id} className="magic-item">
          <img src={Images[magic.image]} alt={magic.name} />
          <h3>{magic.name}</h3>
          <p>{magic.description}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default PureMagic;
