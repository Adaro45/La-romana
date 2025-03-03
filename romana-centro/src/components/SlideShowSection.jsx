import React from "react";
import { useNavigate } from "react-router-dom";
import GenericSlideshow from "./GenericSlideshow";
import "./styles/SlideShowSection.css";

const SlideShowSection = ({ category, items, description, buttonLabel, buttonLink, reverse }) => {
  const navigate = useNavigate();

  return (
    <div className={`slideshow-section ${reverse ? "reverse" : ""}`}>
      <div className="slideshow-wrapper">
        <GenericSlideshow items={items} />
      </div>
      
      <div className="section-description">
        <h2>{category}</h2>
        <p>{description}</p>
        <button className="section-button" 
                onClick={() => navigate(buttonLink)}
                aria-label={`Ver ${category}`}>
          {buttonLabel}
        </button>
      </div>
    </div>
    
  );
};

export default SlideShowSection;