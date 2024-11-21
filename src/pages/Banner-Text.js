import React, { useEffect, useState } from 'react';
import facebook from './images/twitter.png';
import instagram from './images/instagram.png';
import whatsapp from './images/twitter.png';
import banner1 from './images/Banner.jpg';
import banner2 from './images/zero.jpg';
import banner3 from './images/ai-nuclear-energy-future-innovation-disruptive-technology.jpg';
import Popular from '../popular';
import Footer from '../footer';
import ForLadies from '../forLadies';
import ForMen from '../forMen';
import Navi from '../navi';
import Savy from '../savy';
import Contact from '../contact';
import Navbar from '../navbar';
import '../Banner.css';

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
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === bannerContents.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change banner every 5 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, bannerContents.length]);

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
        <div className="icons">
          <div className="icon-images">
            <h5 className='colored-h1'>WEBERWATCHES</h5>
            <img src={facebook} alt="facebookpic" className='social-icon' loading="lazy" />
            <img src={instagram} alt="instagram" className='social-icon' loading="lazy" />
            <img src={whatsapp} alt="whatsapp" className='social-icon' loading="lazy" />
          </div>
        </div>

        <div className='banner-text'>
          <h1 className='asas'>{bannerContents[currentIndex].title}</h1>
          <div className="server">
            <p>{bannerContents[currentIndex].text}</p>
          </div>

          <div className="banner-navigation">
            <button onClick={nextBanner}>More <span>&#x2192;</span></button>
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