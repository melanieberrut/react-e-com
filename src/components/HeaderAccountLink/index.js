import React, { Component } from 'react';
import iconAccount from '../../images/icon-user.svg';
import { NavLink } from 'react-router-dom';

class HeaderAccountLink extends Component {
  render() {
    return (
      <NavLink to="/signin" className="account-btn btn btn-link btn-link--header ml-3">
        <img
          src={iconAccount}
          className="account-btn__icon icon icon--header"
          alt="Account"
          aria-label="Account"
        />
        <span className="sr-only">Account</span>
      </NavLink>
    );
  }
}

export default HeaderAccountLink;
