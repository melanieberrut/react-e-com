import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToWishlist from '../AddToWishlist';
import AddToCart from '../AddToCart';
import PropTypes from 'prop-types';

class WishlistItem extends Component {
  render() {
    const product = this.props.product;
    const addText = this.props.addText;
    return (
      <div className="card">
        <Link to={'/products/' + product.id}>
          <img className="card-img-top" src={product.thumb} alt={product.name} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={'/products/' + product.id}>{product.name}</Link>
          </h5>
          <AddToWishlist isAdded={product.inWishlist} productId={product.id} addText={addText} />
          <p className="card-text">{product.descShort}</p>

          <AddToCart
            productDetails={{ id: product.id, name: product.name, price: product.price, qty: 1 }}
          />
        </div>
      </div>
    );
  }
}

export default WishlistItem;

WishlistItem.propTypes = {
  product: PropTypes.object.isRequired
};
