import React from 'react';

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProvider extends React.Component {
  state = {
    wishlistCount: 0,
    wishlistProducts: [],
    cartCount: 0,
    cartProducts: [],
  };

  updateWishlist = products => {
    this.setState({ wishlistProducts: products });
    this.setState({ wishlistCount: products.length });
  };

  updateCart = products => {
    let cartCount = products
      .map((pdt, i) => pdt.qty)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    this.setState({ cartCount });
    this.setState({ cartProducts: products });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateWishlist: this.updateWishlist,
          updateCart: this.updateCart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer };
