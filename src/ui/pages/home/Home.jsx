import React from "react";
import "./Home.css";
import Vector1 from "../../../assets/Vector1.png";
import image from "../../../assets/image.png";

function Home() {
  return (
    <>
      <div className="border-line"></div>
      <div className="container">
        <div className="left-container">
          <div className="women">
            <p>Woman's Fashion</p>
            <img src={Vector1} alt="" />
          </div>
          <div className="women fashion">
            <p>Men's Fashion</p>
            <img src={Vector1} alt="" />
          </div>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby's & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        <div className="right-container">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
