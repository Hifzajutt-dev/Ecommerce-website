import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/Logo.png";
import Vector from "../../../assets/Vector.png";
import Wishlist from "../../../assets/Wishlist.png";
import Cart from "../../../assets/Cart.png";
import Hamburger from "../../../assets/menu-bar.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <a
                href="#" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "./product";
                }}
                className="text-black"
              >
                Navigate
              </a>

        
      </div>

      <div className="search">
        <input type="text" placeholder="What are you looking for?" />
        <img src={Vector} alt="Search" />
      </div>

      <div className="icons">
        <img src={Wishlist} alt="Wishlist" />
        <img src={Cart} alt="Cart" />
      </div>

    </nav>
  );
};

export default Navbar;
