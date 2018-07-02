import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import WishlistWidget from '../WishlistWidget';
import { AppConsumer } from '../../AppContext';
import SignOutButton from '../SignOut';
class Navigation extends Component {
  render() {
    const { context } = this.props;

    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>
            Home Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/pdp" className="nav-link">
            PDP
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/plp" className="nav-link">
            PLP
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact-us" className="nav-link">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/wishlist" className="nav-link">
            Wishlist
            <WishlistWidget />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
        </li>

        {context.state.authUser ? (
          <li className="nav-item">
            <NavLink to="/myaccount" className="nav-link">
              My Account
            </NavLink>
            or
            <SignOutButton />
          </li>
        ) : (
          <React.Fragment>
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Sign up
              </NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    );
  }
}

export default props => (
  <AppConsumer>{context => <Navigation {...props} context={context} />}</AppConsumer>
);
