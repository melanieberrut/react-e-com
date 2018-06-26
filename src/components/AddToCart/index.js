import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';
import PropTypes from 'prop-types';
import content from "../../content";

class AddToCart extends Component {

	constructor() {
		super();

		this.handleAddToCart = this.handleAddToCart.bind(this);
	}

	handleAddToCart(productDetails) {
		const appContext = this.props.context;
		const cartProds = appContext.state.cartProducts;
		const currId = this.props.productDetails.id;
		let foundIndex = cartProds.findIndex(prod => prod.id === currId);
		
		if(foundIndex >= 0) {
			// If exist in the cart appContext
			let curQty = cartProds[foundIndex].qty;
			let addedQty = this.props.productDetails.qty;
			let newQty = curQty + addedQty;
			cartProds[foundIndex].qty = newQty;
		} else {
			// If does not exist in the cart appContext
			cartProds.push(productDetails);
		}
		// Update 
		appContext.updateCart(cartProds, true);
	}


	render() {
		return (
			<button type="button" className="btn btn-primary btn-block btn-lg" onClick={() => this.handleAddToCart(this.props.productDetails)}>
				{content.addtocart}
			</button>
		);
	}
}

export default props => (
	<AppConsumer>{context => <AddToCart {...props} context={context} />}</AppConsumer>
);

AddToCart.propTypes = {
	productDetails: PropTypes.object.isRequired,
};