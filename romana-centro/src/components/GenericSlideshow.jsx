import React, { useState, useEffect, useMemo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles/GenericSlideshow.css';

const GenericSlideshow = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadIndex, setPreloadIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const memoizedItems = useMemo(() => items, [items]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % memoizedItems.length);
        setPreloadIndex(prev => (prev + 1) % memoizedItems.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [memoizedItems.length]);

  const visibleSlides = useMemo(() => {
    return [
      memoizedItems[currentIndex],
      memoizedItems[preloadIndex]
    ].filter(Boolean);
  }, [currentIndex, preloadIndex, memoizedItems]);

  return (
    <div className="fade-slideshow">
      {visibleSlides.map((item, index) => (
        <div
          key={`slide-${item.id}-${index}`}
          className={`fade-slide ${
            index === 0 ? 'active' : 'preload'
          } ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        >
          <div className="slide-content">
            <LazyLoadImage
              src={item.image}
              alt={item.title}
              className="slide-image"
              effect="blur"
              placeholderSrc={item.placeholder}
              width="100%"
              height="100%"
              decoding="async"
              loading={index === 0 ? "eager" : "lazy"}
              wrapperClassName="image-wrapper"
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

export default React.memo(GenericSlideshow);