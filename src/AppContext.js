import React from 'react';
import axios from 'axios';
import endpoints from './endpoints';

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProvider extends React.Component {
  state = {
    wishlistCount: 0,
    wishlistProducts: [],
    cartCount: 0,
    isAuth: false
  };
  constructor() {
    super();
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeFromWishlist = this.removeFromWishlist.bind(this);
  }
  initWishlist() {
    axios.get(endpoints.wishlistWidget).then(response => {
      const products = response.data;
      this.setState({ wishlistProducts: products });
      this.setState({ wishlistCount: products.length });
    });
  }
  updateProduct(prodId, isAdded) {
    const productUrl = endpoints.products + prodId;
    axios.get(productUrl).then(response => {
      let product = response.data;
      product.inWishlist = isAdded;

      axios.put(productUrl, product);
    });
  }
  syncWishlist(productId, addToList) {
    if (addToList) {
      // POST wishlistProducts back to API
      axios.post(endpoints.wishlistWidget, { productId });
    } else {
      // remove from list based on productId
      axios.get(endpoints.wishlistWidget).then(response => {
        const productsList = response.data;
        const result = productsList.find(product => product.productId === productId);
        axios.delete(endpoints.wishlistWidget + result.id);
      });
    }
  }
  addToWishlist(productId) {
    // Add product to wishlistProducts
    const prodlist = this.state.wishlistProducts;
    prodlist.push(productId);
    this.setState({ wishlistProducts: prodlist });

    // Update wishlist count
    this.setState({ wishlistCount: this.state.wishlistCount + 1 });

    this.syncWishlist(productId, true);
    this.updateProduct(productId, true);
  }
  removeFromWishlist(productId) {
    this.setState({ wishlistCount: this.state.wishlistCount - 1 });
    this.updateProduct(productId, false);
    this.syncWishlist(productId, false);
    // TODO: Remove  product object from favProducts array
  }
  componentDidMount() {
    this.initWishlist();
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addToWishlist: this.addToWishlist,
          removeFromWishlist: this.removeFromWishlist
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer };
