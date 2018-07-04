import React, { Component } from 'react';
import iconAccount from '../../images/icon-user.svg';
import iconLogin from '../../images/icon-gear.svg';
import { AppConsumer } from '../../AppContext';
import { NavLink } from 'react-router-dom';

class HeaderAccountLink extends Component {
  render() {
    const { context } = this.props;
    const signInUrl = context.state.authUser ? '/myaccount' : '/signin';
    const myAccountIcon = context.state.authUser ? iconLogin : iconAccount;
    return (
      <NavLink to={signInUrl} className="account-btn btn btn-link btn-link--header ml-3">
        <img
          src={myAccountIcon}
          className="account-btn__icon icon icon--header"
          alt="Account"
          aria-label="Account"
        />
        <span className="sr-only">Account</span>
      </NavLink>
    );
  }
}

export default props => (
  <AppConsumer>{context => <HeaderAccountLink {...props} context={context} />}</AppConsumer>
);
