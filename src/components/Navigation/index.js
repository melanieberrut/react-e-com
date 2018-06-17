import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>
            Home Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products/6" className="nav-link">
            PDP
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/plp" className="nav-link">
            PLP
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact-us" className="nav-link">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
