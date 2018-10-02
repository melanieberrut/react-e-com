import React, { Component } from 'react';
import iconUser from '../../images/icon-user.svg';
import iconAccount from '../../images/icon-gear.svg';
import { AppConsumer } from '../../AppContext';
import { NavLink } from 'react-router-dom';
import content from '../../content';

class HeaderAccountLink extends Component {
  render() {
    return (
      <AppConsumer>
        {({ authUser }) =>
          authUser ? (
            <NavLink to="/myaccount" className="account-btn btn btn-link btn-link--header ml-3">
              <img
                src={iconAccount}
                className="account-btn__icon icon icon--header"
                alt="Account"
                aria-label="Account"
              />
              <span className="sr-only">{content.Account}</span>
            </NavLink>
          ) : (
            <NavLink to="/signin" className="account-btn btn btn-link btn-link--header ml-3">
              <img
                src={iconUser}
                className="account-btn__icon icon icon--header"
                alt="Account"
                aria-label="Account"
              />
              <span className="sr-only">{content.Account}</span>
            </NavLink>
          )
        }
      </AppConsumer>
    );
  }
}

export default HeaderAccountLink;
