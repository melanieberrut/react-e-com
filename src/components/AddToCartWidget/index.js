import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';

class AddToCartWidget extends Component {
  render() {
    const { context } = this.props;
    return (
      <span className="btn-link__badge badge badge-pill badge-secondary">
        {context.state.cartCount}
      </span>
    );
  }
}

// In order to be able to acces App Context we do following,
// based on: https://reactjs.org/docs/context.html#accessing-context-in-lifecycle-methods
export default props => (
  <AppConsumer>{context => <AddToCartWidget {...props} context={context} />}</AppConsumer>
);
