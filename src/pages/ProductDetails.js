import React, { Component } from "react";
import axios from "axios";
import endpoints from "../endpoints";
import content from "../content";

class ProductDetails extends Component {

	constructor() {
		super();
		this.state = {
			productInfo: [],
			mainImage: "",
			qty: 1,
			cart: []
		};

		this.handleQtyChange = this.handleQtyChange.bind(this);
		this.handleShowImage = this.handleShowImage.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
	}

	// Lifecycles
	// 

	componentDidMount() {
		this.getData();
	}

	// Data
	// 

	getData() {
		const prodId = this.props.match.params.id;
		axios.get(endpoints.productsDetail + prodId).then(response => {
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

	handleAddToCart = (key) => {
		console.log('Add to cart');
    }


	// Render
	// 

	render() {

		const product = this.state.productInfo;

		let minusDisabled = this.state.qty === 1;


		// TODO: On click of add/remove favs
		let fav = product.inWishlist 
				? <button type="button" className="btn btn-info">{ content.removefromfavourites }</button>
				: <button type="button" className="btn btn-info">{ content.addtofavourites }</button>
	
		return (
			<div className="container">
				<div className="mt-4 mb-4">
				{ this.state && this.state.productInfo &&
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
						<span className="small">{ content.productidpreffix }{ product.id }</span>
						<p className="lead">{ product.descShort }</p>
						<p>is in Wishlist: <span>{ product.inWishlist ? "Yes" : "No" }</span></p>

						{ fav }
						
						<div className="mt-4 mb-2">
							
							<p><strong>{ content.colour }</strong>: <span>{ product.color }</span></p>

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
							<button type="button" className="btn btn-primary btn-block btn-lg" onClick={ (e) => this.handleAddToCart(e) }>{ content.addtocart }</button>
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

export default ProductDetails;
