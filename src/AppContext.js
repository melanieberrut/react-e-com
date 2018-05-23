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
    this.addToFavourites = this.addToFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
  }
  addToFavourites() {
    console.log('addToFavourites');
    this.setState({ favCount: this.state.favCount + 1 });
    // TODO: Add entire product object to favProducts array
  }
  removeFromFavourites() {
    console.log('removeFromFavourites');
    this.setState({ favCount: this.state.favCount - 1 });
    // TODO: Remove  product object from favProducts array
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addToFavourites: this.addToFavourites,
          removeFromFavourites: this.removeFromFavourites
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer };
