import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import endpoints from "../endpoints";
import content from "../content";
import AddToCart from '../components/AddToCart';
import AddToWishlist from '../components/AddToWishlist';

class ProductDetails extends Component {

	constructor() {
		super();
		this.state = {
			productInfo: [],
			mainImage: "",
			qty: 1,
		};

		this.handleQtyChange = this.handleQtyChange.bind(this);
		this.handleShowImage = this.handleShowImage.bind(this);
	}

	// Lifecycles
	// 

	componentDidMount() {
		const prodId = this.props.match.params.id;
		this.getData(prodId);
	}

	// Data
	// 

	getData(id) {
		axios.get(endpoints.products + id).then(response => {
			const productInfo = response.data;
			this.setState({ productInfo });
			this.setState({ mainImage: productInfo.images[0] });
		});
	}


	// Page functions
	// 
	
	counterIncrement = () => {
		this.setState({ qty: this.state.qty + 1 });
	}

	counterDecrease = () => {
		this.state.qty <= 1 ? this.setState({ qty: 1 }) : this.setState({ qty: this.state.qty - 1 });
	}

	handleQtyChange = (e) => {
        this.setState({  qty: e.target.value});
    }

    handleShowImage = (key) => {
		const images = this.state.productInfo.images;
		this.setState({ mainImage: images[key] });
    }

	// Render
	// 
	
	render() {

		const product = this.state.productInfo;
		let minusDisabled = this.state.qty === 1;
		
		return (
			<div className="container">
				<div className="mt-4 mb-4">
				{ product !== undefined && product.length !== 0 &&

					<div className="row align-items-start justify-content-start">
	

						<div className="col-12 col-sm-6 col-lg-5">
							{/* START Product Images */}

							<img src={ this.state.mainImage } className="img-fluid" alt={ product.name } />

							<ul className="list-inline row mt-2">
								{
									product.images !== undefined && 
									product.images.map((pdt, i) => (
										<li key={i} className="col-2 col-sm-3 col-lg-3 mb-2">
											<img 
												src={pdt} 
												className="img-fluid rounded cursor-pointer" 
												onClick={ () => this.handleShowImage(i) }
												alt={ product.name + ' ' + i } />
										</li>
									))
								}
							</ul>

							{/* END Product Images */}
						</div>

						<div className="col-12 col-sm-6 col-lg-7">
							{/* START Product Details*/}

							<h1 className="display-4">{ product.name }</h1>

							<span className="product-code small">
								<span className="product-code__label ">{ content.productidpreffix }</span>
								<span className="product-code__value">{ product.id }</span>
							</span>
							
							<p className="lead">{ product.descShort }</p>

							<AddToWishlist isAdded={ product.inWishlist } productId={ product.id } />

							<div className="mt-4 mb-2">

								<div className="row align-items-end mb-2">
									<div className="col-12 col-lg-6"><strong>{ content.colour }</strong>: <span>{ product.color }</span></div>
									<div className="col-12 col-lg-6 text-lg-right">
										<span className="display-4">
											<span className="">{ content.currency }</span>{ product.price }
										</span>
									</div>
								</div>

								<div className="input-group">
									<div className="input-group-prepend">
										<button 
											title={ content.add }
											className="btn btn-lg btn-dark" 
											type="button"
											disabled={ minusDisabled } 
											onClick={ this.counterDecrease }>-</button>
									</div>
									<input type="number" className="form-control" value={ this.state.qty } onChange={ (e) => {this.handleQtyChange(e)} } />
									<div className="input-group-append">
										<button 
											title={ content.remove }
											className="btn btn-lg btn-dark" 
											type="button"
											onClick={ this.counterIncrement }>+</button>
									</div>
								</div>

							</div>

							<div className="mt-3 mb-2 buttons">
								<AddToCart productDetails={ {"id": product.id, "name": product.name, "price": product.price, "qty": this.state.qty} } />
							</div>

							{/* END Product Details */}
						</div>
					</div>
				}
				</div>
			</div>
        );
		

	}

}

ProductDetails.propTypes = {
  match: PropTypes.object
};

export default ProductDetails;
