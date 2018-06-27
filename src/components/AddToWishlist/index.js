import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';
import PropTypes from 'prop-types';
import endpoints from '../../endpoints';
import axios from 'axios';

class AddToWishlist extends Component {
  constructor(props) {
    super(props);
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeFromWishlist = this.removeFromWishlist.bind(this);
    this.state = {
      isAdded: props.isAdded,
      addText: props.addText || 'Add to wishlist'
    };
  }

  addToWishlist(productId) {
    const appContext = this.props.context;
    const prodlist = appContext.state.wishlistProducts;
    // Add product to wishlistProducts
    prodlist.push(productId);

    this.updateProduct(productId, true);
    this.syncWishlist(productId, true);
    appContext.updateWishlist(prodlist, true);
  }
  removeFromWishlist(productId) {
    this.updateProduct(productId, false);
    this.syncWishlist(productId, false);
  }
  updateProduct(prodId, isAdded) {
    const productUrl = endpoints.products + prodId;
    axios.get(productUrl).then(response => {
      let product = response.data;
      product.inWishlist = isAdded;
      // Put back product
      axios.put(productUrl, product);
    });
  }
  syncWishlist(productId, addToList) {
    const appContext = this.props.context;
    if (addToList) {
      // POST wishlistProducts back to API
      axios.post(endpoints.wishlistWidget, { productId });
    } else {
      // remove from list based on productId
      axios.get(endpoints.wishlistWidget).then(response => {
        let productsList = response.data;

        const result = productsList.find(function(product, i) {
          if (product.productId === productId) {
            productsList.splice(i, 1);
            return true;
          }
          return false;
        });

        axios.delete(endpoints.wishlistWidget + result.id).then(function() {
          appContext.updateWishlist(productsList);
        });
      });
    }
  }
  handleClick(isAdded, productId, actionName) {
    this.setState({ isAdded: !isAdded });
    if (actionName === 'add') {
      this.addToWishlist(productId);
    }
    if (actionName === 'remove') {
      this.removeFromWishlist(productId);
    }
  }
  render() {
    const productId = this.props.productId;
    const isAdded = this.state.isAdded;
    const addText = this.state.addText;
    return (
      <React.Fragment>
        {isAdded ? (
          <button
            className="badge badge-success"
            onClick={() => this.handleClick(isAdded, productId, 'remove')}
          >
            Remove from favourites
          </button>
        ) : (
          <button
            className="badge badge-secondary"
            onClick={() => this.handleClick(isAdded, productId, 'add')}
          >
            {addText}
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default props => (
  <AppConsumer>{context => <AddToWishlist {...props} context={context} />}</AppConsumer>
);

AddToWishlist.propTypes = {
  isAdded: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired
};
