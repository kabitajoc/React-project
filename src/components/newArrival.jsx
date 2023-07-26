import React from "react";

function newArrivalCard() {
  const arrivalCards = [
    {
      id: 1,
      image: Image / newArrival1.png,
      fullname: "Knitted Joggers",
    },
    {
      id: 2,
      image: Image / newArrival2.png,
      fullname: "Full Sleeve",
    },
    {
      id: 3,
      image: Image / newArrival3.png,
      fullname: "Active T-Shirts",
    },
    {
      id: 4,
      image: Image / newArrival4.png,
      fullname: "Urban Shirts",
    },
  ];
  return (
    <div className="arrivalCard">
      {
      arrivalCards.map((arrivals) => (
        <div className="images">
          <img src={arrivals.image} />
          <p>{arrivals.fullname}</p>
        </div>
      ))
      }
    </div>
  );
}
export default newArrivalCard;
