import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToWishlist from '../AddToWishlist';
import PropTypes from 'prop-types';

class WishlistItem extends Component {
  render() {
    const product = this.props.product;
    const addText = this.props.addText;
    return (
      <div className="card">
        <img className="card-img-top" src={product.thumb} alt={product.name} />
        <div className="card-body">
          hide me? {product.inWishlist ? 'yes' : 'no'} {product.id}
          <h5 className="card-title">{product.name}</h5>
          <AddToWishlist isAdded={product.inWishlist} productId={product.id} addText={addText} />
          <p className="card-text">{product.descShort}</p>
          <Link to={'/product/' + product.id} className="btn btn-primary">
            Go to Product
          </Link>
          <Link to={'/product/' + product.id} className="btn btn-primary">
            Add to basket
          </Link>
        </div>
      </div>
    );
  }
}

export default WishlistItem;

WishlistItem.propTypes = {
  product: PropTypes.object.isRequired
};
