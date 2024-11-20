import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css'; // Assuming you have your CSS in App.css
import cart from './pages/images/mage_shopping-cart-fill1.png';

const Navbar = ({ currentBannerIndex }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [cartCount, setCartCount] = useState(0);

  // Function to load cart items and update the cart count
  const loadCartCount = () => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  useEffect(() => {
    loadCartCount();
    // Add event listener for storage changes
    window.addEventListener('storage', loadCartCount);
    
    return () => {
      window.removeEventListener('storage', loadCartCount);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Newest', path: '/newest' },
    { name: 'Popular', path: '/popular' },
    { name: 'All', path: '/all' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  return (
    <div className="Header">
      <div className="colors">
        <span>O3</span>
        <h2>0{currentBannerIndex + 1}</h2>
      </div>
      <div className="navlinks">
        {navLinks.map((link) => (
          <a key={link.name} href={link.path} className="super--a">
            {link.name}
          </a>
        ))}
      </div>

      <div className='logs'>
        <p className='logi'>Login</p>
        <div style={{ position: 'relative' }}>
          <img 
            src={cart} 
            alt="add to cartimage" 
            style={{ cursor: 'pointer' }} 
            onClick={() => navigate('/cart')} // Navigate to cart page on click
          />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
