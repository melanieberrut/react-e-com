import React, { Component } from 'react';
import axios from 'axios';
import WishlistItem from '../components/WishlistItem';
import endpoints from '../endpoints';

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: []
    };
  }
  getData() {
    let products = [];
    const wishlistProducts = [];
    const promises = [];
    const _this = this;
    axios.get(endpoints.wishlistWidget).then(response => {
      products = response.data;
      if (products) {
        products.map(function(product) {
          promises.push(axios.get(endpoints.products + product.productId));
        });
        axios.all(promises).then(function(results) {
          results.forEach(function(response) {
            wishlistProducts.push(response.data);
          });
          _this.setState({ products: wishlistProducts });
        });
      }
    });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    const ProjectsList = this.state.products.map((product, i) => (
      <li key={i} className="col-xs-12 col-sm-4 col-md-3">
        <WishlistItem product={product} />
      </li>
    ));
    return <ul className="row list list-unstyled">{ProjectsList}</ul>;
  }
}

export default Wishlist;
