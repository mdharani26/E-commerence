import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import "../components/Navbar.css"; // Import external CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Shopz</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link> </li>
        <li><Link to="/women">Women’s</Link></li>
        <li><Link to="/men">Men’s</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
      </ul>

      <div className="right-section">
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
          <FaSearch className="search-icon" />
        </div>
        <Link to="/cart" className="icon">
          <FaShoppingCart />
        </Link>
        <Link to="/login" className="icon">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
