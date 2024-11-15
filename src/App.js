import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Communication from './Communication'; // Adjust path as necessary
import Footer from './footer';
import ForLadies from './forLadies';
import ForMen from './forMen';
import Popular from './popular';
import CartPage from './cartPage';
import WatchDetail from './SavyDetail';
import Savy from './savy';
function App() {
  return (
    <div className='main-section'>
      {/* One set of Routes */}
      <Routes>
        <Route path="/" element={<Communication />} />
        <Route path="/forLadies" element={<ForLadies />} />
        <Route path="/forMen" element={<ForMen />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/popular" element={<Popular />} />  {/* Popular route */}
        <Route path="/cart" element={<CartPage />} /> {/* Cart route */}
        <Route path="/watch/:id" element={<WatchDetail />} />
        <Route path="/savy" element={<Savy />} />
      </Routes>
    </div>
  )
};

export default App;
