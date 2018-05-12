import React, { Component } from "react";

class ProductTile extends Component {
  render() {
    const product = this.props.product;

    return <h2>{product.name}</h2>;
  }
}

export default ProductTile;
