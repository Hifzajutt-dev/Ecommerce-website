import React from 'react'
import './Music.css'
import Speaker from '../../../assets/speaker.png'

function Music() {
  return (
<section>
<div className="music-container">
      <div className="music-content">
        <span className="category">Categories</span>
        <h1>Enhance Your <br /> Music Experience</h1>
        <div className="timer">
          <div className="time-box"><span>23</span> Hours</div>
          <div className="time-box"><span>05</span> Days</div>
          <div className="time-box"><span>59</span> Minutes</div>
          <div className="time-box"><span>35</span> Seconds</div>
        </div>
        <button className="buy-btn">Buy Now!</button>
      </div>
      <div className="speaker">
        <img className="speaker-img" src={Speaker} alt="Speaker"  />
       
      </div>
    </div>
</section>
  )
}

export default Music