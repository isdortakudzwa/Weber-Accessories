import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import cart from './pages/images/mage_shopping-cart-fill1.png';
import logo from './pages/images/Group 22.png';

const Navbar = ({ currentBannerIndex }) => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to load cart items and update the cart count
  const loadCartCount = () => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  useEffect(() => {
    loadCartCount();
    window.addEventListener('storage', loadCartCount);

    return () => {
      window.removeEventListener('storage', loadCartCount);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Newest', path: '/newest' },
    { name: 'Popular', path: '/popular' },
    { name: 'Products', path: '/Products' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="Header">
      <div className="colors">
        <img src={logo} alt="logo" className='main-logo' />
        <span>O3</span>
        <h2>0{currentBannerIndex + 1}</h2>
      </div>

      {/* Hamburger Menu */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <div className={`navlinks ${isMenuOpen ? 'mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="super--a"
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className='logs'>
        <p className='logi'>Login</p>
        <div style={{ position: 'relative' }}>
          <img
            src={cart}
            alt="add to cart image"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              closeMenu();
              navigate('/cart');
            }}
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