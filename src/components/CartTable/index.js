import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';
import CartTableEntry from '../CartTableEntry';
import content from '../../content';

class CartTable extends Component {
	render() {
		return (
			<div className="basket-table table-one">
				<div className="table-one__headers row d-none d-lg-flex">
					<div className="table-one__header col-lg-4">
						{content.cart.carttable.headers.products}
					</div>
					<div className="table-one__header col-lg-2">{content.cart.carttable.headers.price}</div>
					<div className="table-one__header col-lg-2">{content.cart.carttable.headers.qty}</div>
					<div className="table-one__header col-lg-2">{content.cart.carttable.headers.total}</div>
					<div className="table-one__header col-lg-2 text-right">
						{content.cart.carttable.headers.remove}
					</div>
				</div>
				<div className="table-one__headers row d-flex d-lg-none">
					<div className="table-one__header col-12">{content.cart.carttable.headers.products}</div>
				</div>
				<div className="table-one__contents">
					<AppConsumer>
						{context => (
							<React.Fragment>
								{context.state.cartProducts.map((e, index) => (
									<CartTableEntry key={index} entry={e} />
								))}
							</React.Fragment>
						)}
					</AppConsumer>
				</div>
			</div>
		);
	}
}

export default CartTable;
