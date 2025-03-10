import React from "react";
import "./Testimonials.css";
import Delivery from "../../../assets/delivery.png";
import CustomerService from "../../../assets/Customerservice.png";
import Secure from "../../../assets/secure.png";

function Testimonials() {
  return (
    <section>
      <div className="main-div">
        <div>
          <div className="fast-delivery">
            <div className="black-cirlce">
              <img src={Delivery} alt="" />
            </div>
          </div>
          <div>
           
            <h1>FREE AND FAST DELIVERY</h1>
          </div>

          <div>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div>
          <div className="fast-delivery">
            <div className="black-cirlce">
              <img src={CustomerService} alt="" />
            </div>
          </div>
          <div>
            <h1>24/7 CUSTOMER SERVICE</h1>
          </div>

          <div>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div>
          <div className="fast-delivery">
            <div className="black-cirlce">
              <img src={Secure} alt="" />
            </div>
          </div>

          <div>
            <h1>MONEY BACK GUARANTEE</h1>
          </div>
          <div>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
