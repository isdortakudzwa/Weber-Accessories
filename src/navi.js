import React, { useState } from "react";
import black from "../src/pages/images/girl.jpg";
import brown from "../src/pages/images/orange.png";
import sup from "../src/pages/images/girl.jpg";
import boy from "../src/pages/images/pexels-creationhill-1681010.jpg";
import back from "../src/pages/images/black.png";
import kim from "../src/pages/images/kim.png";
import "../src/navi.css";

function Navi() {
  const [selectedWatch, setSelectedWatch] = useState({
    title: "Apple Watch Ultra",
    price: "$45",
    image: brown,
    image1: boy,
    image2: sup,
    image3: black,
    num: "350+",
  });

  const watches = [
    {
      title: "Apple Watch Ultra",
      price: "$45",
      image: kim,
      image1: boy,
      image2: sup,
      image3: black,
      num: "300+",
    },
    {
      title: "Plain Silicon Watch Band",
      price: "$56.89",
      image: brown,
      image1: boy,
      image2: sup,
      image3: black,
      num: "200+",
    },
    {
      title: "Black Apple Watch",
      price: "$36.99",
      image: back,
      image1: boy,
      image2: sup,
      image3: black,
      num: "100+",
    },
  ];

  const handleWatchChange = (index) => {
    setSelectedWatch(watches[index]);
  };

  return (
    <div className="news">
      {/* Weber Hot Section */}
      <div className="weber-hot">
        <div className="weber-hot-text">
          <h4 className="h4-hot">Hot Trend</h4>
          <h2 className="h2-hot">{selectedWatch.title}</h2>
          <h4 className="price-hot">{selectedWatch.price}</h4>
          <div className="recommendations">
            <img
              src={selectedWatch.image1}
              alt="User"
              className="people-img"
            />
            <img
              src={selectedWatch.image2}
              alt="User"
              className="people-img"
            />
            <p className="recom-num">
              {selectedWatch.num} <span>Likes</span>
            </p>
          </div>
        </div>
        <img
          src={selectedWatch.image}
          alt="Selected Watch"
          className="brown-watch"
        />
      </div>

      {/* Navigation Text Section */}
      <div className="nav-text-3">
        <div className="new-navbar">
          <a href="/" className="new-a-tags">
            Newest
          </a>
          <a href="/" className="new-a-tags">
            For Men
          </a>
          <a href="/" className="new-a-tags">
            For Ladies
          </a>
          <a href="/" className="new-a-tags">
            Contact Us
          </a>
        </div>

        <div className="time-texti">
          <div className="sixty">
            <h2>Time between two worlds</h2>
            <p>$60</p>
          </div>

          <div className="guarennted">
            <div className="colors-3">
              <p>Color</p>
              <span className="colorhunt1"></span>
              <span className="colorhunt2"></span>
              <span className="colorhunt3"></span>
            </div>
            <button>Order Now</button>
          </div>

          <div className="images-container">
            {watches.map((watch, index) => (
              <div
                key={index}
                className="image-item"
                onClick={() => handleWatchChange(index)}
              >
                <div className="iphone-watch-text">
                  <h3>{watch.title}</h3>
                  <h4>{watch.price}</h4>
                </div>
                <img
                  src={watch.image}
                  alt={watch.title}
                  className="iphone-watch"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navi;