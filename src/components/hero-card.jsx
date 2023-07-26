import React from "react";

function HeroCard() {
  return (
    <div className="hero-cards">
      <div className="hero-card">
        <img src="Images/unsplashcard.jpg" className="heroCard-image" />
        <div className="heroCard-text">
          <p>Low Price</p>
          <h3>High Cozziness</h3>
          <p>UPTO 60% OFF</p>
          <a href="#">Explore Items</a>
        </div>
      </div>

      <div className="hero-card">
        <img src="Images/unsplash_img.jpg" className="heroCard-image" />
        <div className="heroCard-text">
          <p>Low Price</p>
          <h3>High Cozziness</h3>
          <p>UPTO 60% OFF</p>
          <a href="#">Explore Items</a>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
