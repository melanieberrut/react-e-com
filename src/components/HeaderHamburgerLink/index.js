import React, { Component } from 'react';
import iconMenu from '../../images/icon-navicon.svg';

class HeaderHamburgerLink extends Component {
  render() {
    return (
      <a className="nav-btn btn btn-link ml-3">
        <img
          src={iconMenu}
          className="nav-btn__icon icon icon--header"
          alt={content.header.iconnav.menu}
          aria-label={content.header.iconnav.menu}
        />
        <span className="sr-only">{content.header.iconnav.menu}</span>
      </a>
    );
  }
}

export default HeaderHamburgerLink;
