import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';

class AddToWishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: props.isFavourite
    };
  }

  handleClick(isFav, productId, contextMethod) {
    this.setState({ isFav: !isFav });
    contextMethod(productId);
  }
  render() {
    const productId = this.props.productId;
    const isFav = this.state.isFav;
    return (
      <AppConsumer>
        {context => (
          <React.Fragment>
            {isFav ? (
              <button
                className="badge badge-success"
                onClick={() => this.handleClick(isFav, productId, context.removeFromWishlist)}
              >
                Remove from favourites
              </button>
            ) : (
              <button
                className="badge badge-secondary"
                onClick={() => this.handleClick(isFav, productId, context.addToWishlist)}
              >
                Add to favourites
              </button>
            )}
          </React.Fragment>
        )}
      </AppConsumer>
    );
  }
}

export { AddToWishlist };
