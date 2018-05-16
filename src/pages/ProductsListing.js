import React, { Component } from "react";
import axios from "axios";
import ProductTile from "../components/ProductTile/";
import endpoints from "../endpoints";

class ProductListing extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: []
    };
  }
  getData() {
    axios.get(endpoints.productsList).then(response => {
      const products = response.data;
      this.setState({ products });
    });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    const ProjectsList = this.state.products.map((product, i) => (
      <li key={i} className="col-xs-12 col-sm-4 col-md-3">
        <ProductTile product={product} />
      </li>
    ));
    return <ul className="row list list-unstyled">{ProjectsList}</ul>;
  }
}

export default ProductListing;
