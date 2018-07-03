import React, { Component } from 'react';
import { auth } from '../../firebase';

class SignOutButton extends Component {
  onClick = () => {
    const { history } = this.props;
    auth.doSignOut().then(() => {
      history.push('/');
    });
  };

  render() {
    return (
      <button type="button" onClick={this.onClick}>
        Sign Out
      </button>
    );
  }
}

export default SignOutButton;
