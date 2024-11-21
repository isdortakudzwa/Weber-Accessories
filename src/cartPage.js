import React from 'react';
import { ShoppingCart, ChevronLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import './cart.css'
const CartPage = () => {
  const [cartItems, setCartItems] = React.useState(() => {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  });
  const navigate = React.useState(() => {})[1];

  const removeItem = (index) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    localStorage.setItem('cartItems', JSON.stringify(newItems));
  };

  const updateQuantity = (index, change) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-8">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Continue Shopping
          </a>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="max-w-4xl mx-auto">
        <div className="cart-header">
          <a href="/" className="inline-flex items-center te hover:text-indigo-700 font-medium">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Continue Shopping
          </a>
          <div className="flex items-center">
            <ShoppingCart className="w-6 h-6 text-gray-700 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">Shopping Cart ({cartItems.length})</h1>
          </div>
        </div>

        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={item.id || index} className="cart-item">
              <div className="p-6 flex items-center gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
                  <div className="cart-item-actions">
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-indigo-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-indigo-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      className="remove-button"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="cart-footer">
          <div className="total">Total Amount: ${total.toFixed(2)}</div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
