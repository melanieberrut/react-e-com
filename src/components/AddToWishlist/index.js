import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';

class AddToWishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: props.isAdded
    };
  }

  handleClick(isAdded, productId, contextMethod) {
    this.setState({ isAdded: !isAdded });
    contextMethod(productId);
  }
  render() {
    const productId = this.props.productId;
    const isAdded = this.state.isAdded;
    return (
      <AppConsumer>
        {context => (
          <React.Fragment>
            {isAdded ? (
              <button
                className="badge badge-success"
                onClick={() => this.handleClick(isAdded, productId, context.removeFromWishlist)}
              >
                Remove from favourites
              </button>
            ) : (
              <button
                className="badge badge-secondary"
                onClick={() => this.handleClick(isAdded, productId, context.addToWishlist)}
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
