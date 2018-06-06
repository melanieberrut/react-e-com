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
    axios.get(endpoints.wishlistWidget).then(response => {
      const products = response.data;
      console.log('products', products);
      this.setState({ products });
    });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    const ProjectsList = this.state.products.map((product, i) => (
      <li key={i} className="col-xs-12">
        <WishlistItem product={product} />
      </li>
    ));
    return <ul className="row list list-unstyled">{ProjectsList}</ul>;
  }
}

export default Wishlist;
