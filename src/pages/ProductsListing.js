import React, { Component } from "react";
import axios from "axios";
import ProductTile from "../components/ProductTile/";

class ProductListing extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: []
    };
  }
  getData() {
    axios.get(`http://localhost:3000/endpoints/productsList.json`).then(response => {
      const products = response.data;
      this.setState({ products });
    });
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.getData();
  }
  render() {
    const ProjectsList = this.state.products.map((product, i) => (
      <li key={i}>
        <ProductTile product={product} />
      </li>
    ));
    return <ul>{ProjectsList}</ul>;
  }
}

export default ProductListing;
