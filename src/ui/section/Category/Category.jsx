import React from "react";
import "./Category.css";
import Arrows from "../../../assets/arrows.png";
import Secondarrow from "../../../assets/secondarrow.png";
import Phone from "../../../assets/Phone.png";
import Gamepad from "../../../assets/Gamepad.png";
import Headphone from "../../../assets/Headphone.png";
import SmartWatch from "../../../assets/Smartwatch.png";
import Computer from "../../../assets/Computer.png";
import Camera from "../../../assets/Camera.png";

function Category() {
  return (
    <>
      <section>
        <div className="first-div">
          <div className="rectangle"></div>
          <h1>Categories</h1>
        </div>
        <div className="Category-container">
          <div className=" Category sale">
            <h1>Browse By Category</h1>
          </div>

          <div className="arrows">
            <div className="first-arrow">
              <img src={Arrows} alt="" />
            </div>
            <div className="second-arrow">
              <img src={Secondarrow} alt="" />
            </div>
          </div>
        </div>
        <div className="categories">
        <div className="phone">
          <img src={Phone} alt="" />
          <h1>Phones</h1>
        </div>
        <div className="computer">
          <img src={Computer} alt="" />
          <h1>Computers</h1>
        </div>
        <div className="smartwatch">
          <img src={SmartWatch} alt="" />
          <h1>SmartWatches</h1>
        </div>
        <div className="camera">
          <img src={Camera} alt="" />
          <h1>Camera</h1>
        </div>
        <div className="headphone">
          <img src={Headphone} alt="" />
          <h1>Headphone</h1>
        </div>
        <div className="gaming">
          <img src={Gamepad} alt="" />
          <h1>Gaming</h1>
        </div>
        </div>
        
      </section>
    </>
  );
}

export default Category;
