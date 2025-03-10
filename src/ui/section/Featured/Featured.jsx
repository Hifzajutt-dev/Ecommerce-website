import React from "react";
import "./Featured.css";
import Perfume from "../../../assets/perfumes.png";
import Playstation from "../../../assets/playstation.png";
import Womenhat from "../../../assets/womanwearinghat.png";
import Echo from "../../../assets/echo.png";

function Featured() {
  return (
    <>
      <section>
        <div className="first-div ">
          <div className="rectangle"></div>
          <h1>Featured</h1>
        </div>
        <div className="arrival">
          <h1>New Arrival</h1>
        </div>

        <div className="flex-arrival">
          <div className="left-arrival">
            <div className="bg-img">
              <img src={Playstation} alt="" />
            </div>
            <div className="overlay-text">
              <h2>PlayStation 5</h2>
              <p>Black and White version of the PS5 <br /> coming out on sale.</p>
              <button>Shop Now</button>
            </div>
          </div>
          
          <div className="right-arrival">
     
      <div className="flex-top">
        <img src={Womenhat} alt="Women's Collections" />
        <div className="overlay-text">
          <h2>Women’s Collections</h2>
          <p>Featured woman collections that <br /> give you another vibe.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="flex-btm">
        <div className="btm-card">
          <img src={Echo} alt="Speakers" className="speaker" />
          <div className="overlay-text">
            <h3>Speakers</h3>
            <p>Amazon wireless speakers</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="btm-card">
          <img src={Perfume} alt="Perfume" />
          <div className="overlay-text">
            <h3>Perfume</h3>
            <p>GUCCI INTENSE OUD EDP</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
