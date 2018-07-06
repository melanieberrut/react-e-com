import React, { Component } from 'react';
import './MyAccount.css';
import UserDetails from '../components/UserDetails';
import { auth } from '../firebase/firebase';
class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  render() {
    if (this.state.user) {
      return (
        <div className="my-account">
          <div className="col-sm-12 text-center">
            <h1>My Account</h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="my-account__tile">
                <UserDetails history={this.props.history} user={this.state.user} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MyAccount;
