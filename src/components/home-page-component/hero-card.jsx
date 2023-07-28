import React from "react";
import "./hero.css";

function HeroCard() {
  return (
    <div className="hero-cards">
      <div className="hero-card">
        <img src="Images/unsplashcard.jpg" className="heroCard-image" />
        <div className="heroCard-text">
          <p>Low Price</p>
          <h4>High Cozziness</h4>
          <p>UPTO 60% OFF</p>
          <a href="#">Explore Items</a>
        </div>
      </div>

      <div className="hero-card">
        <img src="Images/unsplash_img.jpg" className="heroCard-image" />
        <div className="heroCard-text">
          <p>Low Price</p>
          <h4>
            Breezy Summer<br></br> Style
          </h4>
          <p>UPTO 50% OFF</p>
          <a href="#">Explore Items</a>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
