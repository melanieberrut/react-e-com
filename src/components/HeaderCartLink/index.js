import React, { Component } from 'react';
import iconCart from '../../images/icon-cart.svg';
import { NavLink } from 'react-router-dom';
import AddToCartWidget from '../AddToCartWidget';

class HeaderCartLink extends Component {
  render() {
    return (
      <NavLink to="/cart" className="cart-btn btn btn-link btn-link--header ml-3">
        <img src={iconCart} className="cart-btn__icon icon icon--header" alt="Cart" aria-label="Cart" /> 
        <span className="sr-only">Cart</span>
        <AddToCartWidget />
      </NavLink>
    );
  }
}

export default HeaderCartLink;
