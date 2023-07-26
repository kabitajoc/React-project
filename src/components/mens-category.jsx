import React from "react";

function Mens_category() {
  category = [
    {
      id: 1,
      img: Images / mensCategory.png,
      title: Shirts,
    },
    {
      id: 1,
      img: Images / mensCategory1.png,
      title: Shirts,
    },
    {
      id: 1,
      img: Images / mensCategory2.png,
      title: Shirts,
    },
    {
      id: 1,
      img: Images / mensCategory3.png,
      title: Shirts,
    },
    {
      id: 1,
      img: Images / mensCategory4.png,
      title: Shirts,
    },
    {
      id: 1,
      img: Images / mensCategory5.png,
      title: Shirts,
    },
    {
      id: 1,
      img: Images / mensCategory6.png,
      title: Shirts,
    },
    {
      id: 1,
      img: Images / mensCategory7.png,
      title: Shirts,
    },
  ];
  return (
    <div className="men-category">
    {
    arrivalCards.map((category) => (
      <div className="images">
        <img src={category.image} />
        <p>{category.title}</p>
      </div>
    ))
    }
  </div>
  )}


export default Mens_category;
