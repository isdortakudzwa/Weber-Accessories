import React from 'react';
import { useParams } from 'react-router-dom';
import Apple from '../src/components/images/apple.png';
import flowers from '../src/components/images/flowers.png';
import phone from '../src/components/images/phone.png';
import Footer from './footer';
import { Link } from 'react-router-dom';


const watchDetails = [
  {
    id: 1,
    image: flowers,
    name: 'Apple Series 4 For Her',
    
    price:'$45.79',
    description: 'The Apple Series 4 is a stylish smartwatch designed for women. It features Bluetooth connectivity, GPS tracking, and is waterproof, making it ideal for daily use and fitness activities.',
  },

  {
    id: 2,
    image: phone,
    
    price:'$45.79',
    name: 'Samsung S10 Ultra Lacrado',
    description: 'The Samsung S10 Ultra Lacrado comes with breathable bands and an integrated camera. Perfect for capturing moments on the go and maintaining connectivity.',
  },
  {
    id: 3,
    price:'$45.79',
    image: Apple,
    name: 'Apple Ultra Smart Watch',
    description: 'The Apple Ultra Smart Watch features an IP67 waterproof rating, GPS functionality, and WiFi connectivity, making it a top choice for tech-savvy individuals.',
  },
];

const WatchDetail = () => {
  const { id } = useParams(); // Get the watch ID from the URL
  const watch = watchDetails.find(w => w.id === parseInt(id));

  if (!watch) {
    return <p>Watch not found!</p>;
  }

  return (
    <>
   <p className='li-p'> <Link to={'/'} className='backky'>&#x2190; Back</Link></p>
    
    <div className='techy1' alt='/'>
          <img src={watch.image} alt="watchimage" className='savvy-img1' />

          <div className="detail-text">
              <h2>{watch.name}</h2>
              <p>{watch.description}</p>
              <h4>{watch.price}</h4>
              <button className='bim-btn'>Checkout</button>
          </div>

      </div><Footer></Footer></>
  );
};

export default WatchDetail;
