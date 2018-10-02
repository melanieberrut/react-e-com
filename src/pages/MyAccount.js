import React, { Component } from 'react';
import './MyAccount.css';
import { UserDetails, UserAddress, UserOrders } from '../components/AccountDetails';
import SignOutButton from '../components/SignOut';
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
    // Hack to prevent memory leak
    // Later onAuthStateChanged is canceled in componentWillUnmount
    this.fireBaseListener = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  componentWillUnmount() {
    this.fireBaseListener && this.fireBaseListener();
    this.authListener = undefined;
  }
  render() {
    if (this.state.user) {
      return (
        <div className="my-account">
          <div className="col-sm-12 text-center">
            <h1>My Account</h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="my-account__tile">
                <UserDetails history={this.props.history} user={this.state.user} />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="my-account__tile">
                <UserOrders history={this.props.history} user={this.state.user} />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="my-account__tile">
                <UserAddress history={this.props.history} user={this.state.user} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 ">
              <SignOutButton history={this.props.history} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MyAccount;
