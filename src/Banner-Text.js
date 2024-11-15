import React, { useEffect, useState } from 'react';
import facebook from '../src/components/images/whatsapp.png';
import instagram from '../src/components/images/instagram.png';
import whatsapp from '../src/components/images/twitter.png';
import './App.css';
import banner1 from './components/images/Banner.jpg';
import banner2 from './components/images/zero.jpg';
import banner3 from './components/images/ai-nuclear-energy-future-innovation-disruptive-technology.jpg';
import Popular from './popular';
import Footer from './footer';
import ForLadies from './forLadies';
import ForMen from './forMen';
import Navi from './navi';
import Savy from './savy';
import Contact from './contact';
import Navbar from './navbar';

function Text({ currentBannerIndex, setCurrentBannerIndex }) {

  const bannerContents = [
    {
      title: 'WEBER WATCHES',
      text: "Experience the Future of Timekeeping with our Revolutionary Smartwatches that Redefine Innovation. Combining classic craftsmanship with cutting-edge technology, each timepiece tells a story of excellence.",
      image: banner1,
    },
    
    {
      title: "LUXURY COLLECTION",
      text: "Discover our premium selection of meticulously handcrafted timepieces, where traditional watchmaking meets contemporary design. Each watch represents the pinnacle of luxury and sophistication.",
      image: banner2,
    },
    
    {
      title: "SMART FEATURES",
      text: "Stay connected with advanced technology that seamlessly integrates into your lifestyle. From health monitoring to instant notifications, our smart features enhance your daily experience without compromising on style.",
      image: banner3,
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentBannerIndex(currentIndex);
  }, [currentIndex, setCurrentBannerIndex]);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex === bannerContents.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <>
    
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bannerContents[currentIndex].image})`,
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
        <Navbar currentBannerIndex={currentBannerIndex} />
      
      <div className='banner-text'>

        <h1 className='asas'>{bannerContents[currentIndex].title}</h1>
        <div className="server">
          <p>{bannerContents[currentIndex].text}</p>
        </div>

        <div className="banner-navigation">
          {/* <button onClick={prevBanner}>&#x2190;</button> */}
          <button onClick={nextBanner}>More  <span>&#x2192;</span></button>
        </div>

      </div>

      <div className="icons">
        <div className="icon-images">
          <h5 className='colored-h1'>WEBERWATCHES</h5>
          <img src={facebook} alt="facebookpic" className='social-icon' />
          <img src={instagram} alt="instagram" className='social-icon' />
          <img src={whatsapp} alt="whatsapp" className='social-icon' />
        </div>
      </div>
    </div>
    
    <Navi />
    <Popular />
    <Savy />
    <ForLadies />
    <ForMen />
    <Contact />
    <Footer />
    
    </>
  );
}

export default Text;
