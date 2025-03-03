import React, { useState, useEffect } from 'react';
import './styles/GenericSlideshow.css';

const GenericSlideshow = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % items.length);
        setIsTransitioning(false);
      }, 500); // Tiempo que dura la transición
    }, 5000); // Intervalo entre cambios

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="fade-slideshow">
      {items.map((item, index) => (
        <div
          key={`slide-${item.id}`}
          className={`fade-slide ${
            index === currentIndex ? 'active' : 'inactive'
          } ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        >
          <div className="slide-content">
            <img 
              src={item.image} 
              alt={item.title}
              className="slide-image"
            />
            <div className="slide-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenericSlideshow;