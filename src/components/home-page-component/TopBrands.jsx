import React from "react";
import "./TopBrands.css";
function TopBrands() {
  return (
    <div className="brand-container">
      <h2>Top Brands Deal</h2>
      <p>
        Up To <span>60%</span> off on brands
      </p>
      <div className="top-brands">
       <div className="logoimg"> <img src="Images/logo1.png"  /></div>
      <div className="logoimg">  <img src="Images/logo2.png" /></div>
        <div className="logoimg"> <img src="Images/logo3.png" /></div>
       
        <div className="logoimg"><img src="Images/logo4.png"  /></div>
        <div className="logoimg"><img src="Images/logo5.png"  /></div>
      </div>
    </div>
  );
}

export default TopBrands;
