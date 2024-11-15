import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import white from '../src/components/images/white.png';
import pank from '../src/components/images/pank.png';
import pank2 from '../src/components/images/pank2.png';
import arrow1 from '../src/components/images/Group 7.png';
import arrow2 from '../src/components/images/Group 8.png';
import cart from '../src/components/images/mage_shopping-cart-fill.png';

function Popular() {
  const navigate = useNavigate();

  // Watches data
  const watches = [
    { name: "Plain Silicon", price: 69.90, image: white },
    { name: "Apple SmartWatch X8 Ultra", price: 65.99, image: white },
    { name: "Redmi Silicon", price: 54.89, image: white  },
    { name: "Smart Watch X8", price: 45.58, image: white },
    { name: "Apple SmartWatch X8 Ultra", price: 65.99, image: white },
    { name: "Redmi Silicon", price: 54.89, image: pank },
    { name: "Smart Watch X8", price: 45.58, image: pank2 },
    { name: "Smart Watch X8", price: 45.58, image: pank2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const handleAddToCart = (name, price, image) => {
    const newItem = { name, price, image, quantity: 1, id: Date.now() };
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = existingCart.findIndex(item => item.name === name);

    let updatedCart;
    if (existingItemIndex >= 0) {
      updatedCart = existingCart.map((item, index) => 
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, newItem];
    }

    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert('Item added to cart successfully!');
  };

  const nextWatch = () => {
    if (currentIndex < watches.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevWatch = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get only the watches that should be visible
  const visibleWatches = watches.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="main-popular">
      <h2 className="pop-first-h2">Popular</h2>
      <div className="carousel-container">
        <div className="sub-popular">
          {visibleWatches.map((watch, index) => (
            <div className={`sub${index + 1}`} key={index}>
              <h4>{watch.name}</h4>
              <img src={watch.image} alt="watchimage" className="cool-img-watch" />
              <div className="price-cart">
                <p className="sim-p">WEBERWATCHES</p>
                <div className="order-price">
                  <p>${watch.price.toFixed(2)}</p>
                  <button onClick={() => handleAddToCart(watch.name, watch.price, watch.image)}>
                    Order Now
                  </button>
                </div>
                <img
                  src={cart}
                  alt="cartimage"
                  className="pop-cart"
                  onClick={() => {
                    handleAddToCart(watch.name, watch.price, watch.image);
                    navigate('/cart');
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="arrows">
        <img 
          src={arrow2} 
          alt="previous" 
          onClick={prevWatch} 
          style={{ 
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            marginRight: '10px',
            opacity: currentIndex === 0 ? 0.5 : 1
          }} 
        />
        <img 
          src={arrow1} 
          alt="next" 
          onClick={nextWatch} 
          style={{ 
            cursor: currentIndex >= watches.length - cardsToShow ? 'not-allowed' : 'pointer',
            opacity: currentIndex >= watches.length - cardsToShow ? 0.5 : 1
          }} 
        />
      </div>
    </div>
  );
}

export default Popular;