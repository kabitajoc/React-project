import React from "react";
import "./NewArrivalCard.css";
import "./MensCategory.css";

function MensCategory() {
  const categories = [
    {
      id: 1,
      img: "Images/mensCategory.png",
      title: "Shirts",
    },
    {
      id: 2,
      img: "Images/mensCategory1.png",
      title: " Printed T-Shirts",
    },
    {
      id: 3,
      img: " Images/mensCategory2.png",
      title: " Plain T-Shirt",
    },
    {
      id: 4,
      img: " Images/mensCategory3.png",
      title: "Polo T-Shirt",
    },
    {
      id: 5,
      img: "Images/mensCategory4.png",
      title: " Hoodies & Sweetshirt",
    },
    {
      id: 6,
      img: "Images/mensCategory5.png",
      title: "Jeans",
      link: "Explore Now",
    },
    {
      id: 7,
      img: "Images/mensCategory6.png",
      title: " Activewear",
    },
    {
      id: 8,
      img: " Images/mensCategory7.png",
      title: "Boxers",
    },
  ];
  return (
    <>
      <h3>Mens Category</h3>
      <div className="men-category">
        {categories.map((category) => (
          <div className="images" key={category.id}>
            <img src={category.img} />
            <div className="explore-flex">
              <div className="category-text">
                <h4>{category.title}</h4>
                <p>Explore Now</p>
              </div>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z"
                    fill="#797979"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MensCategory;
