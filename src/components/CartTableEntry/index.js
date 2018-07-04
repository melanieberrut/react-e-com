import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppConsumer } from '../../AppContext';
import content from '../../content';
import iconRemove from '../../images/icon-trash.svg';
import CartQuantitySelector from '../CartQuantitySelector';

class CartTableEntry extends Component {
	constructor() {
		super();

		this.handleDeleteEntry = this.handleDeleteEntry.bind(this);
	}
	handleDeleteEntry() {
		const appContext = this.props.context;
		const cartProds = appContext.state.cartProducts;
		const currId = this.props.entry.id;
		let foundIndex = cartProds.findIndex(prod => prod.id === currId);

		cartProds.splice(foundIndex, 1);

		appContext.updateCart(cartProds, true);
	}
	render() {
		let entry = this.props.entry;
		let totalQty = entry.price * entry.qty;
		let minusDisabled = entry.qty === 1;
		return (
			<div className="table-one__content row align-items-lg-center product">
				<div className="table-one__col col-6 col-lg-4">
					<NavLink to={`/products/` + entry.id} className="product__link">
						{entry.name}
					</NavLink>
				</div>

				<div className="table-one__col col-lg-2 text-right d-none d-lg-flex">
					{content.currency}
					{entry.price}
				</div>

				<div className="table-one__col col-lg-2 d-none d-lg-flex">
					<CartQuantitySelector entry={entry} isMinusDisabled={minusDisabled} />
				</div>

				<div className="table-one__col col-6 col-lg-2 text-right text-lg-left">
					{content.currency}
					{totalQty}
				</div>

				<div className="entry-separator d-block d-lg-none" />

				<div className="table-one__col col-6 col-lg-2 d-flex d-lg-none">
					<CartQuantitySelector entry={entry} isMinusDisabled={minusDisabled} />
				</div>

				<div className="table-one__col col-6 col-lg-2 d-flex justify-content-end">
					<img
						src={iconRemove}
						className="table-one__icon c-pointer"
						alt="Remove product"
						aria-label="Remove product"
						onClick={() => this.handleDeleteEntry()}
					/>
				</div>
			</div>
		);
	}
}

export default props => (
	<AppConsumer>{context => <CartTableEntry {...props} context={context} />}</AppConsumer>
);
