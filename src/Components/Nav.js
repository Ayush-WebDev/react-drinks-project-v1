import React from "react";
import logo from "../Assets/logo.svg";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <img src={logo} alt="CocktailsDB" className="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "green",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "green",
                  };
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
