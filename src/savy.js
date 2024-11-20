import React, { useState } from 'react';
import './savy.css';

// Import your images
import Apple from '../src/pages/images/apple.png';
import Flowers from '../src/pages/images/flowers.png';
import Phone from '../src/pages/images/phone.png';

const smartWatches = [
  {
    id: 1,
    image: Flowers,
    title: "Apple Series 4 For Her",
    features: "Bluetooth, GPS & Waterproof",
    price: "$45.79",
    description: "The Apple Series 4 is a perfect blend of style and technology. It's designed for her, offering Bluetooth connectivity, GPS tracking, and is waterproof for all your adventures."
  },
  {
    id: 2,
    image: Phone,
    title: "Samsung S10 Ultra Lacrado",
    features: "Breathable Bands, Camera",
    price: "$45.79",
    description: "The Samsung S10 Ultra features breathable bands and an impressive camera. Ideal for those who love to capture moments on the go."
  },
  {
    id: 3,
    image: Apple,
    title: "Apple Ultra Smart Watch",
    features: "Ip67 Waterproof, GPS & Wifi",
    price: "$45.79",
    description: "The Apple Ultra Smart Watch is built to withstand the elements with IP67 waterproofing. Stay connected with GPS and Wifi capabilities."
  },
];

function TechSavyWatches() {
  const [selectedWatch, setSelectedWatch] = useState(null);

  const openModal = (watch) => {
    setSelectedWatch(watch);
  };

  const closeModal = () => {
    setSelectedWatch(null);
  };

  return (
    <div className="tech-watches-wrapper">
      <h2 className="smart-watches-heading">Smart Watches</h2>

      <div className="smart-watches-grid">
        {smartWatches.map((watch) => (
          <div key={watch.id} className="smart-watch-card">
            <img src={watch.image} alt={watch.title} className="smart-watch-image" />
            <div className="smart-watch-info">
              <h3 className="smart-watch-title">{watch.title}</h3>
              <p className="smart-watch-features">{watch.features}</p>
              <p className="smart-watch-price">{watch.price}</p>
              <button
                className="smart-watch-btn"
                onClick={() => openModal(watch)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedWatch && (
        <div className="smart-watch-modal show">
          <div className="smart-watch-modal-content">
            <span className="smart-watch-close" onClick={closeModal}>&times;</span>
            <img
              src={selectedWatch.image}
              alt={selectedWatch.title}
              className="smart-watch-modal-image"
            />
            <h3 className="smart-watch-title">{selectedWatch.title}</h3>
            <p className="smart-watch-modal-desc">{selectedWatch.description}</p>
            <p className="smart-watch-price">{selectedWatch.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechSavyWatches;
