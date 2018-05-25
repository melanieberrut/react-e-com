import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddToWishlist } from '../AddToWishlist';

class ProductTile extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="card">
        <img className="card-img-top" src={product.thumb} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">
            {product.name}{' '}
            <AddToWishlist isFavourite={product.isFavourite} productId={product._id} />
          </h5>

          <p className="card-text">{product.descShort}</p>

          <Link to={'/product/' + product._id} className="btn btn-primary">
            Go to Product
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductTile;
