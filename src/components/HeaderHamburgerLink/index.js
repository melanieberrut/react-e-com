import React, { Component } from 'react';
import iconMenu from '../../images/icon-navicon.svg';

class HeaderHamburgerLink extends Component {
  render() {
    return (
      <a className="nav-btn btn btn-link ml-3">
        <img src={iconMenu} className="nav-btn__icon icon icon--header" alt="Menu" aria-label="Menu" /> 
        <span className="sr-only">Menu</span>
      </a>
    );
  }
}

export default HeaderHamburgerLink;
