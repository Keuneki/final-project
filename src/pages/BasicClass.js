import React from 'react';
import { Link } from 'react-router-dom';
import classesData from '../API/classes.json';
import Images from '../images/index.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../CSS/Main.css';

const BasicClass = () => {
  const basicClasses = classesData.classes.filter((cls) => cls.type === 'basic');

  return (
    <div className="all-classes-container">
      <div className="headeR">
        <Header />
      </div>
      <h1 className="class-title">Basic Classes</h1>
      <div className="class-grid">
        {basicClasses.map((cls) => (
          <Link to={`/class/${cls.id}`} key={cls.id}>
            <div className="class-card">
              <img src={Images[cls.image]} alt={cls.name} />
              <p>{cls.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BasicClass;
