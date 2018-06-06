import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class WishlistItem extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="card">
        <img className="card-img-top" src={product.thumb} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>

          <p className="card-text">{product.descShort}</p>
          <Link to={'/product/' + product.id} className="btn btn-primary">
            Go to Product
          </Link>
          <Link to={'/product/' + product.id} className="btn btn-primary">
            Pick up in store
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
