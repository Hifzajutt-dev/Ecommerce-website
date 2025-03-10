import React, { useState } from "react";
import "./Products.css";
import Card from './../../common/Card/Card'
import useFetch from "../../../Hooks/useFetch";

const Products = () => {
  const { data } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/Products?}`
  );

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    if (!data) return;
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="products-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, ...product }) => (
            <Card key={id} {...product} />
          ))
        ) : (
          <p className="no-products">No products found. Try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
