import React from "react";
import { useParams } from "react-router";
import useFetch from "../../../Hooks/useFetch"; 

function HomeDetailPage() {
  const { id } = useParams(); 
  const { data } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/Articles/${id}`
  );
return (
    <div className="home-detail-page">
      <img src={data.image} alt={data.title} className="detail-image" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p className="price">Price: ${data.price}</p>
      <p className="rating">Rating: {data.rating?.rate}</p>
    </div>

  );
}

export default HomeDetailPage;




