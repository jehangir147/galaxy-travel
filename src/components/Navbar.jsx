import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <h1> GLX TRVL</h1>
      </Link>
      <ul className={navbar ? "nav-menu" : "nav-menu active"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleNav}>
        {navbar ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
