import React from 'react';
const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;
class AppProvider extends React.Component {
  state = {
    favCount: 0,
    favProducts: [],
    cartCount: 0,
    isLoggedIn: false
  };
  constructor() {
    super();
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeFromWishlist = this.removeFromWishlist.bind(this);
  }
  addToWishlist(productId) {
    console.log('addToFavourites', productId);
    this.setState({ favCount: this.state.favCount + 1 });
    // TODO: Add entire product object to favProducts array
  }
  removeFromWishlist(productId) {
    console.log('removeFromFavourites', productId);
    this.setState({ favCount: this.state.favCount - 1 });
    // TODO: Remove  product object from favProducts array
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
