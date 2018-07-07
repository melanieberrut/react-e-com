import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToWishlist from '../AddToWishlist';
import PropTypes from 'prop-types';

class ProductTile extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="card">
        <Link to={'/products/' + product.id}>
          <img className="card-img-top" src={product.thumb} alt={product.name} />
        </Link>
        <div className="card-body">
          <Link to={'/products/' + product.id}>
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <AddToWishlist isAdded={product.inWishlist} productId={product.id} />

          <p className="card-text">{product.descShort}</p>
        </div>
      </div>
    );
  }
}

export default ProductTile;

ProductTile.propTypes = {
  product: PropTypes.object.isRequired
};
