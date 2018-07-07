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
      <button
        type="button"
        className="btn btn-outline-dark btn-lg btn-block"
        onClick={this.onClick}
      >
        Sign Out
      </button>
    );
  }
}

export default SignOutButton;
