import React, { useState } from 'react';
import black from '../src/components/images/girl.jpg';
import brown from '../src/components/images/orange.png';
import sup from '../src/components/images/girl.jpg';
import boy from '../src/components/images/pexels-creationhill-1681010.jpg';
import back from '../src/components/images/black.png';
import kim from '../src/components/images/kim.png';


function Navi() {
  const [selectedWatch, setSelectedWatch] = useState({
    title: 'Apple Watch Ultra',
    price: '$45',
    image: brown,
    image1: boy,
    image2: sup,
    image3: black,
    num: '350+'
  });

  const [watches] = useState([
    { title: 'Apple Watch Ultra', 
      price: '$45', 
      image: kim ,
      image1: boy,
      image2: sup,
      image3: black,
       num: '300+'

    },

    { title: 'Plain Silicon Watch Band',
       price: '$56.89',
       image: brown,
       image1: boy,
       image2: sup,
       image3: black,
        num: '200+'
       },

    { title: 'Black Apple Watch',
       price: '$36.99',
       image: back,
       image1: boy,
       image2: sup,
       image3: black,
        num: '100+'
       }
  ]);

  const handleWatchChange = (index) => {
    setSelectedWatch(watches[index]);
  };

  return (
    <div className="news">
      <div className="weber-hot">
        <div className={`weber-hot-text ${selectedWatch.title}`}>
          <div className="weber-text-hot">
            <h4 className='h4-hot'>Hot Trend</h4>
            <h2 className='h2-hot'>{selectedWatch.title}</h2>
            <h4 className='price-hot'>{selectedWatch.price}</h4>
          </div>

          <div className="recommendations">
          <img src={selectedWatch.image1} alt="selected watch img" className='people-img' />
          <img src={selectedWatch.image2} alt="selected watch img" className='people-img' />
          <img src={selectedWatch.image2} alt="selected watch img" className='people-img' />
          <p className='recom-num'>{selectedWatch.num}<span>Likes</span></p>

          </div>
          
        </div>

        <img src={selectedWatch.image} alt="selected watch img" className='brown-watch' />
      </div>

      <div className="nav-text-3">
        <div className='new-navbar'>
          <a href="/" className='new-a-tags'>Newest</a>
          <a href="/" className='new-a-tags'>For Men</a>
          <a href="/" className='new-a-tags'>For Ladies</a>
          <a href="/" className='new-a-tags'>Contact Us</a>
        </div>

        <div className="time-texti">
          <div className="sixty">
            <h2>Time between two worlds</h2>
            <p>$60</p>
          </div>

          <div className="guarennted">
            <div className="samw-p">
              <div className="colors-3">
                <p>Color</p> 
                <span className='colorhunt1'></span>
                <span className='colorhunt2'></span>
                <span className='colorhunt3'></span>
              </div>
              <p className='g-p'>Guaranteed Deals</p>
            </div>
            <button>Order Now</button>
          </div>

          <div className="corusel">
            {watches.map((watch, index) => (
              <div className={`cara${index + 1}`} key={index} onClick={() => handleWatchChange(index)}>
                <div className="watch-self">
                  <h3>{watch.title}</h3>
                  <h4>{watch.price}</h4>
                </div>
                <img src={watch.image} alt={watch.title} className='iphone-watch' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navi;
