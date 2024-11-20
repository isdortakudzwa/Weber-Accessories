import React, { useState } from 'react';
import tracker from '../src/pages/images/gps tracker.png';
import waterproof from '../src/pages/images/waterproof.png';
import camera from '../src/pages/images/camera.png';
import breath from '../src/pages/images/steam.png';
import aluminium from '../src/pages/images/alucase.png';
import fitness from '../src/pages/images/fitnes tracker.png';
import big2 from '../src/pages/images/Double watch.png';
import './forLadies.css';

// Data arrays
const Features = [
  { id: 1, image: tracker, description: 'GPS Tracker' },
  { id: 2, image: waterproof, description: 'Waterproof Tracker' },
  { id: 3, image: camera, description: 'Camera Tracker' }
];

const Colors = [
  { id: 7, image: big2, description: 'Stylish Black and Gold Design' },
];

const Trending = [
  { id: 4, image: breath, description: 'Breathable Silicon Watchband' },
  { id: 5, image: aluminium, description: 'Aluminium Case' },
  { id: 6, image: fitness, description: 'Fitness Tracker' },
];

function ForMen() {
  const [activeSection, setActiveSection] = useState('features');

  // Function to get items to display
  const getItems = () => {
    switch (activeSection) {
      case 'features':
        return Features;
      case 'colors':
        return Colors;
      case 'trending':
        return Trending;
      default:
        return Features;
    }
  };

  const itemsToRender = getItems();

  return (
    <div className="men-watch">
      <h2 className="title">For Men</h2>

      {/* Navigation Tabs */}
      <div className="tabs">
        <p
          className={`tab ${activeSection === 'features' ? 'active' : ''}`}
          onClick={() => setActiveSection('features')}
        >
          Features
        </p>
        <p
          className={`tab ${activeSection === 'colors' ? 'active' : ''}`}
          onClick={() => setActiveSection('colors')}
        >
          Colors 
        </p>
        <p
          className={`tab ${activeSection === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveSection('trending')}
        >
          Trending
        </p>
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {/* Left Features */}
        <div className="items-list">
          {itemsToRender.map((item) => (
            <div key={item.id} className="item">
              <div className="item-image">
                <img src={item.image} alt={item.description} />
              </div>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Central Image */}
        <div className="central-image">
          <img 
            src={big2} 
            alt="Watch Display" 
          />
        </div>

        {/* Right Trending */}
        <div className="items-list">
          {Trending.map((item) => (
            <div key={item.id} className="item">
              <div className="item-image">
                <img src={item.image} alt={item.description} />
              </div>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForMen;
