import React from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.css";
import Card from "../../common/Card/Card";
import useFetch from "../../../Hooks/useFetch";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("query") || "";
  const { data = [] } = useFetch(`${import.meta.env.VITE_REACT_APP_API_URL}/Articles`);
  const filteredProducts = data.filter(({ title }) => 
    title.toLowerCase().includes(query.toLowerCase())
  );
return (
    <div className="search-results-container">
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, ...product }) => <Card key={id} {...product} />)
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

