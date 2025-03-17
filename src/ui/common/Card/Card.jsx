  import React from "react";
  import { Link } from "react-router-dom";
  import "./Card.css";
  
  const Card = ({ id, title, price, rating, image }) => {
    return (
      <Link to={`/Articles/${id}`} className="card-link">
        <div className="card">
          <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-price">${price}</p>
            <div className="card-rating">
              <p className="rating-rate">{rating?.rate}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  
  export default Card;
  





