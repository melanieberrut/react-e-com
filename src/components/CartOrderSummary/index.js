import React, { Component } from 'react';
import content from '../../content';
import { AppConsumer } from '../../AppContext';

class CartOrderSummary extends Component {
  constructor() {
    super();
    this.state = {
      shippingFee: 0,
      vat: 10,
      totalPrices: 0,
      vatPrice: 0,
      orderTotal: 0
    };
  }

  getContext() {
    const appContext = this.props.context;
    return appContext.state.cartProducts;
  }

  componentDidMount() {
    let cartProds = this.getContext();
    this.calculateTotals(cartProds);
  }

  componentWillReceiveProps() {
    let cartProds = this.getContext();
    this.calculateTotals(cartProds);
  }

  calculateTotals(cartProds) {
    // Total prices
    let totalPrices = cartProds
      .map((pdt, i) => pdt.qty * pdt.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue)
      .toFixed(2);
    this.setState(prevState => ({ totalPrices }));

    // Shipping
    let shippingFee = parseInt(15, 10).toFixed(2);
    this.setState(prevState => ({ shippingFee }));

    // VAT
    let vatPrice = parseInt(this.state.vat / 100 * totalPrices, 10).toFixed(2);
    this.setState(prevState => ({ vatPrice }));

    // ALL TOTALS
    let orderTotal = (
      parseInt(totalPrices, 10) +
      parseInt(shippingFee, 10) +
      parseInt(vatPrice, 10)
    ).toFixed(2);
    this.setState(prevState => ({ orderTotal }));
  }

  render() {
    return (
      <div className="basket-summary section-one">
        <div className="basket-summary__header section-one__headers">
          {content.cart.ordersummary.title}
        </div>
        <div className="basket-summary__contents section-one__contents">
          <p className="basket-summary__text col-12">{content.cart.ordersummary.text}</p>
          <div className="col-12 align-items-lg-center">
            <ul className="order-menu list-unstyled">
              <li className="order-menu__item d-flex justify-content-between">
                <span>{content.cart.ordersummary.subtotal}</span>
                <strong>
                  {content.currency}
                  {this.state.totalPrices}
                </strong>
              </li>
              <li className="order-menu__item d-flex justify-content-between">
                <span>{content.cart.ordersummary.shipping}</span>
                <strong>
                  {content.currency}
                  {this.state.shippingFee}
                </strong>
              </li>
              <li className="order-menu__item d-flex justify-content-between">
                <span>
                  {content.cart.ordersummary.vat} ({this.state.vat}
                  {content.cart.ordersummary.vatUnit})
                </span>
                <strong>
                  {content.currency}
                  {this.state.vatPrice}
                </strong>
              </li>
              <li className="order-menu__item order-menu__item--strong d-flex justify-content-between">
                <span className="label">{content.cart.ordersummary.total}</span>
                <span className="value">
                  {content.currency}
                  {this.state.orderTotal}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default props => (
  <AppConsumer>{context => <CartOrderSummary {...props} context={context} />}</AppConsumer>
);
