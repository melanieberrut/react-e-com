import React, { Component } from 'react';
import iconAccount from '../../images/icon-user.svg';
import { AppConsumer } from '../../AppContext';
import { NavLink } from 'react-router-dom';

class HeaderAccountLink extends Component {
  render() {
    const { context } = this.props;
    const signInUrl = context.state.authUser ? '/myaccount' : '/signin';
    const signInText = context.state.authUser ? 'My account' : 'Login';
    return (
      <NavLink to={signInUrl} className="account-btn btn btn-link btn-link--header ml-3">
        <img
          src={iconAccount}
          className="account-btn__icon icon icon--header"
          alt="Account"
          aria-label="Account"
        />
        <span className="sr-only">Account</span>
        <small>{signInText}</small>
      </NavLink>
    );
  }
}

export default props => (
  <AppConsumer>{context => <HeaderAccountLink {...props} context={context} />}</AppConsumer>
);
