import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './popular.css';

// Import images
import white from '../src/pages/images/white.png';
import pank from '../src/pages/images/pank.png';
import pank2 from '../src/pages/images/pank2.png';
import arrow1 from '../src/pages/images/Group 7.png';
import arrow2 from '../src/pages/images/Group 8.png';
import cart from '../src/pages/images/mage_shopping-cart-fill.png';

const watches = [
  { id: 1, name: "Plain Silicon", price: 69.90, image: white, category: "Basic" },
  { id: 2, name: "Apple SmartWatch X8 Ultra", price: 65.99, image: white, category: "Premium" },
  { id: 3, name: "Redmi Silicon", price: 54.89, image: pank, category: "Budget" },
  { id: 4, name: "Smart Watch X8", price: 45.58, image: pank2, category: "Budget" },
  { id: 5, name: "Apple SmartWatch Pro", price: 89.99, image: white, category: "Premium" },
  { id: 6, name: "Fitness Tracker Elite", price: 59.50, image: pank, category: "Sports" },
];

function Popular() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  // Memoized navigation and cart handling
  const handleAddToCart = useCallback((watch) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = cartItems.findIndex(item => item.id === watch.id);

    let updatedCart;
    if (existingItemIndex >= 0) {
      updatedCart = cartItems.map((item, index) => 
        index === existingItemIndex 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...watch, quantity: 1 }];
    }

    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
    // Optional: Add toast or snackbar notification
    alert(`${watch.name} added to cart`);
  }, []);

  const handleDirectPurchase = useCallback((watch) => {
    handleAddToCart(watch);
    navigate('/cart');
  }, [handleAddToCart, navigate]);

  // Memoized navigation logic
  const nextWatch = useCallback(() => {
    setCurrentIndex(prev => 
      prev < watches.length - cardsToShow ? prev + 1 : prev
    );
  }, [watches.length, cardsToShow]);

  const prevWatch = useCallback(() => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : prev);
  }, []);

  // Memoized visible watches
  const visibleWatches = useMemo(() => 
    watches.slice(currentIndex, currentIndex + cardsToShow), 
    [currentIndex, cardsToShow]
  );

  return (
    <div className="main-popular">
      <h2 className="pop-first-h2">Popular Watches</h2>
      
      <div className="carousel-container">
        <div className="sub-popular">
          {visibleWatches.map((watch, index) => (
            <div className={`watch-card watch-${index + 1}`} key={watch.id}>
              <h4>{watch.name}</h4>
              <img 
                src={watch.image} 
                alt={watch.name} 
                className="cool-img-watch" 
              />
              <div className="price-cart">
                <p className="brand-label">WEBERWATCHES</p>
                <div className="order-section">
                  <p className="watch-price">${watch.price.toFixed(2)}</p>
                  <div className="watch-actions">
                    <button 
                      className="order-btn"
                      onClick={() => handleDirectPurchase(watch)}
                    >
                      Buy Now
                    </button>
                    <img
                      src={cart}
                      alt="Add to Cart"
                      className="cart-icon"
                      onClick={() => handleAddToCart(watch)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-navigation">
        <img 
          src={arrow2} 
          alt="Previous" 
          className={`nav-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={prevWatch}
        />
        <img 
          src={arrow1} 
          alt="Next" 
          className={`nav-arrow ${currentIndex >= watches.length - cardsToShow ? 'disabled' : ''}`}
          onClick={nextWatch}
        />
      </div>
    </div>
  );
}

export default Popular;
