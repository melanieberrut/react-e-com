import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';
import MiniBasketEntry from '../MiniBasketEntry';
import content from '../../content';
import { NavLink } from 'react-router-dom';

class MiniBasket extends Component {
  render() {
    const { context } = this.props;
    let cartProducts = context.state.cartProducts;

    if (cartProducts.length > 0) {
      let totalPrices = cartProducts
        .map((pdt, i) => pdt.qty * pdt.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
        .toFixed(2);
      return (
        <div className="mini-basket">
          <div
            onClick={() => this.props.toggleMiniBasket()}
            className="mini-basket__overlay overlay-click"
          />
          <div className="mini-basket__content box-shadow box-shadow--1 p-4">
            <h2 className="col-12 text-left">{content.minibasket.title}</h2>
            <div className="table-two">
              <div className="table-two__contents col-12">
                {context.state.cartProducts.map((e, index) => (
                  <MiniBasketEntry key={index} entry={e} />
                ))}
              </div>
              <div className="table-two__footers col-12 pt-2 pb-2 table-two__footer--border-dark">
                <div className="table-two__content row">
                  <div className="table-two__col col-6 text-left">
                    {content.minibasket.totalslabel}
                  </div>
                  <div className="table-two__col col-6 text-right">
                    {content.currency}
                    {totalPrices}
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              to="/cart"
              onClick={() => this.props.toggleMiniBasket()}
              className="btn btn-primary btn-block mt-4"
            >
              {content.minibasket.basket}
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mini-basket mini-basket--empty ">
          <div
            onClick={() => this.props.toggleMiniBasket()}
            className="mini-basket__overlay overlay-click"
          />
          <div className="mini-basket__content box-shadow box-shadow--1 p-4">
            <h2 className="text-left">{content.minibasket.title}</h2>
            <p className="text-left">{content.minibasket.empty}</p>
          </div>
        </div>
      );
    }
  }
}

export default props => (
  <AppConsumer>{context => <MiniBasket {...props} context={context} />}</AppConsumer>
);
