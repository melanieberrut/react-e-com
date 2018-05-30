import React, { Component } from 'react';
import { AppConsumer } from '../../AppContext';
import axios from 'axios';
import endpoints from '../../endpoints';

class WishlistWidget extends Component {
  componentDidMount() {
    this.initWishlist();
  }
  testMethod() {
    return true;
  }
  initWishlist() {
    axios.get(endpoints.wishlistWidget).then(response => {
      const appContext = this.props.context;
      appContext.updateWishlist(response.data);
    });
  }

  render() {
    const { context } = this.props;
    return <span className="badge badge-secondary">{context.state.wishlistCount}</span>;
  }
}
// In order to be able to acces App Context we do following,
// based on: https://reactjs.org/docs/context.html#accessing-context-in-lifecycle-methods
export default props => (
  <AppConsumer>{context => <WishlistWidget {...props} context={context} />}</AppConsumer>
);
