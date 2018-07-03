import React, { Component } from 'react';
import iconCart from '../../images/icon-cart.svg';
import AddToCartWidget from '../AddToCartWidget';
import content from '../../content';

class HeaderCartLink extends Component {
  render() {
    return (
      <div
        onClick={e => this.props.handleMiniBasketButton()}
        className="cart-btn btn btn-link btn-link--header ml-3"
      >
        <img
          src={iconCart}
          className="cart-btn__icon icon icon--header"
          alt={content.header.iconnav.basket}
          aria-label={content.header.iconnav.basket}
        />
        <span className="sr-only">{content.header.iconnav.basket}</span>
        <AddToCartWidget />
      </div>
    );
  }
}

export default HeaderCartLink;
