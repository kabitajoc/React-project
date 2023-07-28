import React from "react";
import "./NewArrivalCard.css";

function NewArrivalCard() {
  const arrivalCards = [
    {
      id: 9,
      image: " Images/newArrival1.png",
      title: "Knitted Joggers",
    },
    {
      id: 10,
      image: "Images/newArrival2.png",
      title: "Full Sleeve",
    },
    {
      id: 12,
      image: " Images/newArrival3.png",
      title: "Active T-Shirts",
    },
    {
      id: 13,
      image: "Images/newArrival4.png",
      title: "Urban Shirts",
    },
  ];
  return (
    <>
      <h3>New Arrivals</h3>;
      <div className="arrivalCard">
        {arrivalCards.map((arrival, index) => {
          return (
            <div className="images" key={arrival.id}>
              <img src={arrival.image} />
              <h4>{arrival.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default NewArrivalCard;
