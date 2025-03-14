import React, { useRef } from "react";
import "./Flash.css";
import Semicolon from "../../../assets/Semiclone.png";
import Arrows from "../../../assets/arrows.png";
import Secondarrow from "../../../assets/secondarrow.png";
import Card from "./../../common/Card/Card";
import useFetch from "../../../Hooks/useFetch";

function Flash() {
  const { data } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/Articles`
  );
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <section>
        <div className="first-div">
          <div className="rectangle"></div>
          <h1>Today's</h1>
        </div>
        <div className="flash-container">
          <div className="wrapper">
            <div className="sale">
              <h1>Flash Sales</h1>
            </div>

            <div className="first-day">
              <div className="days">
                <p>Days</p>
                <h1>03</h1>
              </div>
              <div className="semicolon">
                <img src={Semicolon} alt="" />
              </div>
              <div className="hours">
                <p>Hours</p>
                <h1>23</h1>
              </div>
              <div className="semicolon">
                <img src={Semicolon} alt="" />
              </div>
              <div className="minutes">
                <p>Minutes</p>
                <h1>19</h1>
              </div>
              <div className="semicolon">
                <img src={Semicolon} alt="" />
              </div>
              <div className="seconds">
                <p>Seconds</p>
                <h1>56</h1>
              </div>
            </div>
          </div>
          <div className="arrows">
            <div className="first-arrow" onClick={scrollLeft}>
              <img src={Arrows} alt="Scroll Left" />
            </div>
            <div className="second-arrow" onClick={scrollRight}>
              <img src={Secondarrow} alt="Scroll Right" />
            </div>
          </div>
        </div>
      </section>

      <div className="container2">
        <div className="products-wrapper" ref={scrollRef}>
          {data && data.length > 0 ? (
            data.map(({ id, ...home }) => <Card key={id} {...home} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className="product-btn">
        <button>View All Products</button>
      </div>
    </>
  );
}

export default Flash;
