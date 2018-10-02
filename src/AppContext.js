import React from 'react';
import { firebase } from './firebase';

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProvider extends React.Component {
  state = {
    wishlistCount: 0,
    wishlistProducts: [],
    authUser: false,
    cartCount: 0,
    cartProducts: []
  };

  updateWishlist = products => {
    this.setState({ wishlistProducts: products });
    this.setState({ wishlistCount: products.length });
  };

  toggleIsAuth = authUser => {
    this.setState({ authUser });
  };
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState(() => ({ authUser })) : this.setState(() => ({ authUser: null }));
    });
  }

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
          toggleIsAuth: this.toggleIsAuth,
          updateCart: this.updateCart,
          authUser: this.state.authUser
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer };
