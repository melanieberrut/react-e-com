import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import content from '../../content';

class MiniBasketEntry extends Component {
  render() {
    let entry = this.props.entry;
    return (
      <div className="table-two__content row align-items-lg-center product pt-2 pb-2">
        <div className="table-two__col col-8 text-left">
          <NavLink to={`/products/` + entry.id} className="product__link">
            {entry.name}
          </NavLink>
          <p className="m-0">
            <small>x{entry.qty}</small>
          </p>
        </div>
        <div className="table-two__col col-4 text-right">
          {content.currency}
          {entry.price}
        </div>
      </div>
    );
  }
}

export default MiniBasketEntry;
