import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">
            Products
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
