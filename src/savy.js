import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Apple from '../src/components/images/apple.png';
import flowers from '../src/components/images/flowers.png';
import phone from '../src/components/images/phone.png';

const smartWatches = [
  {
    id: 1,
    name: 'Apple Series 4 For Her',
    image: flowers,
    features: 'Bluetooth, GPS & Waterproof',
    price: 45.79,
    description: 'The Apple Series 4 is a stylish smartwatch designed for women. It features Bluetooth connectivity, GPS tracking, and is waterproof, making it ideal for daily use and fitness activities.',
  },
  {
    id: 2,
    name: 'Samsung S10 Ultra Lacrado',
    image: phone,
    features: 'Breathable Bands, Camera',
    price: 45.79,
    description: 'The Samsung S10 Ultra Lacrado comes with breathable bands and an integrated camera. Perfect for capturing moments on the go and maintaining connectivity.',
  },
  {
    id: 3,
    name: 'Apple Ultra Smart Watch',
    image: Apple,
    features: 'IP67 Waterproof, GPS & WiFi',
    price: 45.79,
    description: 'The Apple Ultra Smart Watch features an IP67 waterproof rating, GPS functionality, and WiFi connectivity, making it a top choice for tech-savvy individuals.',
  },
];

function Savy() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCardClick = (id) => {
    navigate(`/watch/${id}`); // Navigate to the detailed view with the watch ID
  };

  return (
    <div>
      <div className="tech-savy">
        <h2 className='tech-h2'>All Tech-Savvy Smart Watches</h2>

        <div className="techy">
          {smartWatches.map((watch) => (
            <div className="techy-card" key={watch.id} onClick={() => handleCardClick(watch.id)}>
              <img src={watch.image} alt="watchimg" className='savvy-img' />
              <h3 className='film-h3'>{watch.name}</h3>
              <h4>{watch.features}</h4>
              <p>${watch.price.toFixed(2)}</p>
              <button>View More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Savy;
