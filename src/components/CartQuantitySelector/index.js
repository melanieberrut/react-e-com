import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';
import content from '../../content';
import PropTypes from 'prop-types';

class CartQuantitySelector extends Component {
  constructor() {
    super();

    this.handlePlusMinus = this.handlePlusMinus.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
  }

  handlePlusMinus(calc) {
    const appContext = this.props.context;
    const cartProds = appContext.state.cartProducts;
    const currId = this.props.entry.id;
    let foundIndex = cartProds.findIndex(prod => prod.id === currId);
    let curQty = cartProds[foundIndex].qty;
    let newQty;
    if (calc === 'plus') {
      // do plus
      newQty = parseInt(curQty, 10) + 1;
    } else {
      // do minus
      newQty = parseInt(curQty, 10) - 1;
    }
    cartProds[foundIndex].qty = newQty;
    appContext.updateCart(cartProds, true);
  }

  handleQtyChange = e => {
    const appContext = this.props.context;
    const cartProds = appContext.state.cartProducts;
    const currId = this.props.entry.id;
    let foundIndex = cartProds.findIndex(prod => prod.id === currId);
    let newQty = e.target.value;
    cartProds[foundIndex].qty = newQty;
    appContext.updateCart(cartProds, true);
  };

  render() {
    return (
      <div className="qty-selector input-group">
        <div className="input-group-prepend">
          <button
            title={content.add}
            className="btn btn-lg btn-dark"
            type="button"
            disabled={this.props.isMinusDisabled}
            onClick={() => this.handlePlusMinus('minus')}
          >
            -
          </button>
        </div>
        <input
          type="number"
          className="form-control"
          value={this.props.entry.qty}
          onChange={e => {
            this.handleQtyChange(e);
          }}
        />
        <div className="input-group-append">
          <button
            title={content.remove}
            className="btn btn-lg btn-dark"
            type="button"
            onClick={() => this.handlePlusMinus('plus')}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CartQuantitySelector.propTypes = {
  qty: PropTypes.number,
  isMinusDisabled: PropTypes.bool,
  handlePlusMinus: PropTypes.func,
  handleQtyChange: PropTypes.func
};

export default props => (
  <AppConsumer>{context => <CartQuantitySelector {...props} context={context} />}</AppConsumer>
);
