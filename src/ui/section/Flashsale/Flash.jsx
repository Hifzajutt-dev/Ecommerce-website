import React, { useRef, useState, useEffect } from "react";
import "./Flash.css";
import Semicolon from "../../../assets/Semiclone.png";
import Arrows from "../../../assets/arrows.png";
import Secondarrow from "../../../assets/secondarrow.png";
import Card from "./../../common/Card/Card";
import useFetch from "../../../Hooks/useFetch";

function Flash() {
  const { data } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/Articles/`
  );
  const scrollRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
                <h1>{String(timeLeft.days).padStart(2, "0")}</h1>
              </div>
              <div className="semicolon">
                <img src={Semicolon} alt="" />
              </div>
              <div className="hours">
                <p>Hours</p>
                <h1>{String(timeLeft.hours).padStart(2, "0")}</h1>
              </div>
              <div className="semicolon">
                <img src={Semicolon} alt="" />
              </div>
              <div className="minutes">
                <p>Minutes</p>
                <h1>{String(timeLeft.minutes).padStart(2, "0")}</h1>
              </div>
              <div className="semicolon">
                <img src={Semicolon} alt="" />
              </div>
              <div className="seconds">
                <p>Seconds</p>
                <h1>{String(timeLeft.seconds).padStart(2, "0")}</h1>
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
            data.map((home) => <Card key={home.id} id={home.id} {...home} />)
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
