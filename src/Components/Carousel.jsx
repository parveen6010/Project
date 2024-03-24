import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaMinus } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import "../Sass/Carousel.scss"; // Import your custom CSS file
import Utensils from "../Resources/ModernUtensils.jpg"
import Cone from "../Resources/cone.jpg"
import Chair from "../Resources/chair.jpg"
import Flower from "../Resources/flower.jpg"
import Vase from "../Resources/vase.jpg"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [Utensils,
    Cone,
    Flower,
    Vase,
    Chair];
  const totalItems = items.length;

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className='mainpart-container'>
      <h1 className='mainpart-title'>Featured Products</h1>
      <h5 className='mainpart-subtitle'>Explore and discover a variety of products</h5>
      <div className="carousel-container">
        <img src={items[(currentIndex - 2 + totalItems) % totalItems]} alt='Items' className='carousel-item3 ' />
        <img src={items[(currentIndex + 2) % totalItems]} alt='Items' className='carousel-item4 ' />
        <img src={items[(currentIndex - 1 + totalItems) % totalItems]} alt='Items' className='carousel-item1 ' />
        <img src={items[(currentIndex + 1) % totalItems]} alt='Items' className='carousel-item2  ' />
        <div className="main-item-container">
          <h1 className='main-item-title'>Modern kitchen utensils</h1>
          <img src={items[currentIndex]} alt='Items' className='main-item-image' />
        </div>
      </div>

      <div className='controls'>
        <button onClick={prevItem} className='control-button'><FaArrowLeft /></button>
        <div className='dots'>
          {items.map((item, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
            >
              {index === currentIndex ? <FaMinus /> : <GoDotFill />}
            </span>
          ))}
        </div>
        <button onClick={nextItem} className='control-button'><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Carousel;


