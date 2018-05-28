import React from 'react';

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProvider extends React.Component {
  state = {
    wishlistCount: 0,
    wishlistProducts: []
  };

  updateWishlist = products => {
    this.setState({ wishlistProducts: products });
    this.setState({ wishlistCount: products.length });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateWishlist: this.updateWishlist
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer };
