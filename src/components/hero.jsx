import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-section">
      <img
        src="Images/hero.jpg"
        className="hero-image
      "
      />
      <div className="hero-text">
        <p>T-shirt/Tops</p>
        <h2>Summer <br></br>value pack</h2>
        <p>cool/colorful/comfy</p>
        <button>
          <span>shop Now</span>
        </button>
      </div>
    </div>
  );
};
export default Hero;
