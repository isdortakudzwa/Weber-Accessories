import React, { useState } from 'react';
import Apple from '../src/components/images/apple.png';
import flowers from '../src/components/images/flowers.png';
import phone from '../src/components/images/phone.png';

const smartWatches = [
  {
    id: 1,
    image: flowers,
    title: "Apple Series 4 For Her",
    features: "Bluetooth, GPS & Waterproof",
    price: "$45.79",
    description: "The Apple Series 4 is a perfect blend of style and technology. It's designed for her, offering Bluetooth connectivity, GPS tracking, and is waterproof for all your adventures."
  },
  {
    id: 2,
    image: phone,
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

function Savy() {
  const [selectedWatch, setSelectedWatch] = useState(null);

  const handleCardClick = (watch) => {
    setSelectedWatch(watch);
  };

  const handleClose = () => {
    setSelectedWatch(null);
  };

  return (
    <div>
      <div className="tech-savy">
        <h2 className='tech-h2'>All Tech-Savvy Smart Watch</h2>
        {smartWatches.map((watch) => (
          <div key={watch.id} className={`techy${watch.id}`}>
            <img src={watch.image} alt="watchimg" className='savvy-img' />
            <h3 className='film-h3'>{watch.title}</h3>
            <h4>{watch.features}</h4>
            <p>{watch.price}</p>
            <button onClick={() => handleCardClick(watch)}>View More</button>
          </div>
        ))}
      </div>

      {selectedWatch && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>{selectedWatch.title}</h2>
            <img src={selectedWatch.image} alt="watchimg" className='savvy-img' />
            <p>{selectedWatch.description}</p>
            <p>{selectedWatch.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Savy;
