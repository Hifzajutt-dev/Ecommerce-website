import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.avif';
import slider3 from '../../../assets/slider3.jpg';
import slider4 from '../../../assets/slider4.avif';
import slider5 from '../../../assets/slider5.avif';
import slider6 from '../../../assets/slider6.avif';
import slider7 from '../../../assets/slider7.avif';
import slider8 from '../../../assets/slider8.avif';
import slider9 from '../../../assets/slider9.avif';

function Home() {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9];
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const [sliderRef, setSliderRef] = useState(null);
 const showSlider = {
    dots: true,
    infinite: true,
    speed: 300,

  };
const handleCategoryClick = (index) => {
    if (sliderRef) {
      sliderRef.slickGoTo(index);
    }
  };
return (
    <>
      <div className="border-line"></div>
      <div className="container">
        <div className="left-container">
          {categories.map((category, index) => (
            <p key={index} onClick={() => handleCategoryClick(index)}>{category}</p>
          ))}
        </div>
        <div className="right-container">
          <Slider ref={(slider) => setSliderRef(slider)} {...showSlider}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" className="slider-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Home;






