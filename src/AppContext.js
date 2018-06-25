import React from 'react';

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProvider extends React.Component {
  state = {
    wishlistCount: 0,
    wishlistProducts: [],
    isAuth: false
  };

  updateWishlist = products => {
    this.setState({ wishlistProducts: products });
    this.setState({ wishlistCount: products.length });
  };

  toggleIsAuth = isAuth => {
    this.setState({ isAuth });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateWishlist: this.updateWishlist,
          toggleIsAuth: this.toggleIsAuth
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer };
