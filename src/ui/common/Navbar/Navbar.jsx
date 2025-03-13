import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/Logo.png";
import Vector from "../../../assets/Vector.png";
import Wishlist from "../../../assets/Wishlist.png";
import Cart from "../../../assets/Cart.png";
import Hamburger from "../../../assets/menu-bar.png";

const Navbar = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${search}`);
    }
  };
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={Hamburger} alt="Menu" />
      </div>

      <div className={`header ${menuOpen ? "open" : ""}`}>
        <span>Home</span>
        <span>Contact</span>
        <span>About</span>
        <span>Sign Up</span>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <img
          src={Vector}
          alt="Search"
          onClick={handleSearch}
          className="search-icon"
        />
      </div>

      <div className="icons">
        <img src={Wishlist} alt="Wishlist" />
        <img src={Cart} alt="Cart" />
      </div>
    </nav>
  );
};

export default Navbar;
