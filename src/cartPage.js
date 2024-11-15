import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = () => {
      const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
      // Filter out items that have a quantity of zero
      const filteredItems = items.filter(item => item.quantity > 0);
      setCartItems(filteredItems);
    };

    loadCartItems();
    // Add event listener for storage changes
    window.addEventListener('storage', loadCartItems);
    
    return () => {
      window.removeEventListener('storage', loadCartItems);
    };
  }, []);

  const removeItem = (index) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    localStorage.setItem('cartItems', JSON.stringify(newItems));
  };

  const updateQuantity = (index, change) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index) {
        const newQuantity = Math.max(1, item.quantity + change); // Ensure quantity doesn't go below 1
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className='cart-page'>
      <div className='cart-header'>
        <Link to={'/'} className='backky'>
          ← Back
        </Link>
        <h2>Shopping Cart ({cartItems.length} items)</h2>
      </div>

      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <h3>Your cart is empty</h3>
          <button onClick={() => navigate('/')} className='continue-shopping'>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className='cart-items'>
            {cartItems.map((item, index) => (
              <div key={item.id || index} className='cart-item'>
                <img src={item.image} alt={item.name} className='item-image' />
                <div className='item-details'>
                  <h4>{item.name}</h4>
                  <p className='item-price'>${(item.price * item.quantity).toFixed(2)}</p>
                  <div className='quantity-controls'>
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, 1)}>+</button>
                  </div>
                  <button 
                    onClick={() => removeItem(index)}
                    className='remove-btn'
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-summary'>
            <div className='total'>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className='remove-btn'>
            Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
