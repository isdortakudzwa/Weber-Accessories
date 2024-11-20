import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__header">
        <a href="/" className="footer__logo">
          <span className="logo primary"></span>
        </a>

        <ul className="social">
          <li className="social__item">
            <a href="/" target="_blank" className="btn social">
              <span className="icon twitter"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="/" target="_blank" className="btn social">
              <span className="icon youtube"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="/" target="_blank" className="btn social">
              <span className="icon telegram"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="/" target="_blank" className="btn social">
              <span className="icon whatsapp"></span>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__list">
        <div className="footer__item">
          <h4>Home</h4>
          <ul>
            <li>Newest</li>
            <li>Popular</li>
            <li>Trending</li>
          </ul>
        </div>

        <div className="footer__item">
          <h4>Newest</h4>
          <ul>
            <li>Men</li>
            <li>Ladies</li>
            <li>Unisex</li>
          </ul>
        </div>

        <div className="footer__item">
          <h4>Popular</h4>
          <ul>
            <li>Hot Deals</li>
            <li>Prices</li>
            <li>Order</li>
          </ul>
        </div>

        <div className="footer__item">
          <h4>All Categories</h4>
          <ul>
            <li>Men</li>
            <li>Ladies</li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; 2024 Weber Watches, All Rights Reserved</p>
        <div className="privacy-links">
          <a href="/build">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
