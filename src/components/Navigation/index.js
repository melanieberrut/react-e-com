import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import WishlistWidget from '../WishlistWidget';

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
          <NavLink to="/pdp" className="nav-link">
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
          <NavLink to="/wishlist" className="nav-link">
            Wishlist
            <WishlistWidget />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            Sign In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            Sign up
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
