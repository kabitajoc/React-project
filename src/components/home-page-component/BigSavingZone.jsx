import React from "react";
import "./BigSavingZone.css";

function BigSavingZone() {
  // const savings = [
  //   {
  //     id: 25,
  //     image: "Images/Bigsavingzone1.png",
  //     title: " Hawaiian<br/> Shirts",
  //     description: "Dress up in summer vibe",
  //     off: "UPTO 60% OFF",
  //   },
  //   {
  //     id: 26,
  //     image: "Images/Bigsavingzone2.png",
  //     title: "Printed<br/> T-Shirt",
  //     description: "New Designs Every Week",
  //     off: "UPTO 40% OFF",
  //   },
  //   {
  //     id: 27,
  //     image: "Images/Bigsavingzone3.png",
  //     title: "Cargo<br/>Joggers",
  //     desription: "Move with style & comfort",
  //     off: "UPTO 50% OFF",
  //   },
  //   {
  //     id: 28,
  //     image: "Images/Bigsavingzone4.png",
  //     title: "Urban<br/>Shirts",
  //     description: "Live In Comfort",
  //     off: "FLAT 60% OFF",
  //   },
  //   {
  //     id: 29,
  //     image: "Images/Bigsavingzone4.png",
  //     title: "Oversized<br/>T-Shirts",
  //     description: "Street Style Icon",
  //     off: "FLAT 60% OFF",
  //   },
  // ];
  return (
    <>
      <h3>Big Saving Zone</h3>
      <div className="saving-cards">
        {/* {
          savings.map((saving)=>)
        } */}
        <div className="saving-card">
          <img src="Images/Bigsavingzone1.png" className="savingCard-image" />
          <div className="savingCard-text savingText1">
            <h4>
              {" "}
              Hawaiian
              <br /> Shirts
            </h4>
            <p>Dress up in summer vibe</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              className="download-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
                //   stroke-width="2"
                //   stroke-linecap="round"
              />
            </svg>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src="Images/Bigsavingzone2.png" className="savingCard-image" />
          <div className="savingCard-text savingText2">
            <h4>
              Printed
              <br /> T-Shirt
            </h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              className="download-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
                //   stroke-width="2"
                //   stroke-linecap="round"
              />
            </svg>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src="Images/Bigsavingzone3.png" className="savingCard-image" />
          <div className="savingCard-text savingText3">
            <h4>
              Cargo
              <br />
              Joggers
            </h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              className="download-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
                //   stroke-width="2"
                //   stroke-linecap="round"
              />
            </svg>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src="Images/Bigsavingzone4.png" className="savingCard-image1" />
          <div className="savingCard-text savingText4">
            <h4>Low Price</h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              className="download-svg1"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
                //   stroke-width="2"
                //   stroke-linecap="round"
              />
            </svg>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src="Images/Bigsavingzone5.png" className="savingCard-image1" />
          <div className="savingCard-text savingText5">
            <h4>
              Oversized
              <br />
              T-Shirts
            </h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              className="download-svg1"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
                //   stroke-width="2"
                //   stroke-linecap="round"
              />
            </svg>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigSavingZone;
