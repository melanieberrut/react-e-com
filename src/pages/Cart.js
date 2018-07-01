import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppConsumer } from '../AppContext';
import content from '../content';
import CartTable from '../components/CartTable';
import CartOrderSummary from '../components/CartOrderSummary';
import DiscountCode from '../components/DiscountCode';

class Cart extends Component {
	render() {
		const appContext = this.props.context;
		let cartProds = appContext.state.cartProducts;

		if (cartProds.length > 0) {
			return (
				<div className="cart-page col-12">
					<h1 className="mb-4">{content.cart.title}</h1>
					<div className="col-12">
						<CartTable />
					</div>

					<div className="row">
						<div className="col-12 col-lg-6">
							<DiscountCode />
						</div>
						<div className="col-12 col-lg-6">
							<CartOrderSummary />
						</div>
					</div>

					<div className="col-12 text-right">
						<NavLink to={'/'} className="btn btn-lg btn-primary">
							{content.cart.continuetopay}
						</NavLink>
					</div>
				</div>
			);
		} else {
			return (
				<div className="cart-page cart-page--empty">
					<h1 className="mb-4">{content.cart.title}</h1>
					<p>{content.cart.empty.text}</p>
					<NavLink to={'/'} className="btn btn-lg btn-primary">
						{content.cart.empty.btn}
					</NavLink>
				</div>
			);
		}
	}
}

export default props => (
	<AppConsumer>{context => <Cart {...props} context={context} />}</AppConsumer>
);
