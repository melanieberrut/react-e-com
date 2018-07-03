import React, { Component } from 'react';
import iconAccount from '../../images/icon-user.svg';
import { NavLink } from 'react-router-dom';
import content from '../../content';

class HeaderAccountLink extends Component {
  render() {
    return (
      <NavLink to="/login" className="account-btn btn btn-link btn-link--header ml-3">
        <img
          src={iconAccount}
          className="account-btn__icon icon icon--header"
          alt={content.header.iconnav.account}
          aria-label={content.header.iconnav.account}
        />
        <span className="sr-only">{content.header.iconnav.menu}</span>
      </NavLink>
    );
  }
}

export default HeaderAccountLink;
