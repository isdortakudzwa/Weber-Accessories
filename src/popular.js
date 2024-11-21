import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './popular.css';

// Import images
import white from '../src/pages/images/white.png';
import pank from '../src/pages/images/pank.png';
import pank2 from '../src/pages/images/pank2.png';
import arrow1 from '../src/pages/images/Group 7.png';
import arrow2 from '../src/pages/images/Group 8.png';
import cart from '../src/pages/images/mage_shopping-cart-fill.png';

// Expanded watch categories
const watches = [
  { 
    id: 1, 
    name: "Plain Silicon", 
    price: 69.90, 
    image: white, 
    category: "Basic",
    description: "Sleek and simple silicon watch for everyday use"
  },
  { 
    id: 2, 
    name: "Apple SmartWatch X8 Ultra", 
    price: 65.99, 
    image: white, 
    category: "Premium",
    description: "Advanced smart features with elegant design"
  },
  { 
    id: 3, 
    name: "Redmi Silicon", 
    price: 54.89, 
    image: pank, 
    category: "Budget",
    description: "Affordable smart watch with essential features"
  },
  { 
    id: 4, 
    name: "Smart Watch X8", 
    price: 45.58, 
    image: pank2, 
    category: "Budget",
    description: "Budget-friendly option with core smart features"
  },
  { 
    id: 5, 
    name: "Apple SmartWatch Pro", 
    price: 89.99, 
    image: white, 
    category: "Premium",
    description: "Professional-grade smartwatch with advanced tracking"
  },
  { 
    id: 6, 
    name: "Fitness Tracker Elite", 
    price: 59.50, 
    image: pank, 
    category: "Sports",
    description: "Specialized fitness tracking with comprehensive metrics"
  },
];

function Popular() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filter, setFilter] = useState('All');

  // Category filtering
  const filteredWatches = useMemo(() => {
    return filter === 'All' 
      ? watches 
      : watches.filter(watch => watch.category === filter);
  }, [filter]);

  // Category filter options
  const categories = useMemo(() => {
    const cats = new Set(watches.map(watch => watch.category));
    return ['All', ...cats];
  }, []);

  // Responsive card count and filtering
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced cart management with advanced tracking
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
    
    // Advanced notification system
    const event = new CustomEvent('cart-updated', { 
      detail: { 
        item: watch, 
        action: 'add' 
      } 
    });
    window.dispatchEvent(event);
  }, []);

  // Wishlist functionality
  const [wishlist, setWishlist] = useState(() => 
    JSON.parse(localStorage.getItem('wishlist') || '[]')
  );

  const toggleWishlist = useCallback((watch) => {
    const isInWishlist = wishlist.some(item => item.id === watch.id);
    let updatedWishlist;

    if (isInWishlist) {
      updatedWishlist = wishlist.filter(item => item.id !== watch.id);
    } else {
      updatedWishlist = [...wishlist, watch];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  }, [wishlist]);

  // Memoized visible watches with filtering
  const visibleWatches = useMemo(() => 
    filteredWatches.slice(currentIndex, currentIndex + cardsToShow), 
    [currentIndex, cardsToShow, filteredWatches]
  );

  return (
    <div className="main-popular">
      <div className="popular-header">
        <h2 className="pop-first-h2">Popular Watches</h2>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="carousel-container">
        <div className={`sub-popular ${isAnimating ? 'animating' : ''}`}>
          {visibleWatches.map((watch, index) => (
            <div 
              className={`watch-card watch-${index + 1}`} 
              key={watch.id}
            >
              <div className="wishlist-icon" onClick={() => toggleWishlist(watch)}>
                {wishlist.some(item => item.id === watch.id) 
                  ? '❤️' 
                  : '🤍'}
              </div>
              <h4>{watch.name}</h4>
              <p className="watch-description">{watch.description}</p>
              <img 
                src={watch.image} 
                alt={watch.name} 
                className="cool-img-watch" 
                loading="lazy"
              />
              <div className="price-cart">
                <p className="brand-label">WEBERWATCHES</p>
                <div className="order-section">
                  <p className="watch-price">${watch.price.toFixed(2)}</p>
                  <div className="watch-actions">
                    <button 
                      className="order-btn"
                      onClick={() => {
                        handleAddToCart(watch);
                        navigate('/cart');
                      }}
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

      {/* Navigation Arrows */}
      <div className="carousel-navigation">
        <img 
          src={arrow2} 
          alt="Previous" 
          className={`nav-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
        />
        <img 
          src={arrow1} 
          alt="Next" 
          className={`nav-arrow ${currentIndex >= filteredWatches.length - cardsToShow ? 'disabled' : ''}`}
          onClick={() => setCurrentIndex(prev => 
            prev < filteredWatches.length - cardsToShow ? prev + 1 : prev
          )}
        />
      </div>
    </div>
  );
}

export default Popular;