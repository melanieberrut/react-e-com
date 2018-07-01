import React, { Component } from 'react';
import iconWishlist from '../../images/icon-star.svg';
import { NavLink } from 'react-router-dom';
import WishlistWidget from '../WishlistWidget';

class HeaderWishlistLink extends Component {
  render() {
    return (
      <NavLink to="/wishlist" className="wishlist-btn btn btn-link btn-link--header ml-3">
        <img
          src={iconWishlist}
          className="wishlist-btn__icon icon icon--header"
          alt="wishlist"
          aria-label="wishlist"
        />
        <span className="sr-only">Wishlist</span>
        <WishlistWidget />
      </NavLink>
    );
  }
}

export default HeaderWishlistLink;
