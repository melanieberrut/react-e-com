import React, { Component } from 'react';

class SignInForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="userLogin">User name:</label>
          <input
            id="userLogin"
            type="text"
            value=""
            className="form-control"
            placeholder="Enter your Login"
          />
        </div>
        <div className="form-group">
          <label for="userPassword">Password:</label>
          <input
            id="userPassword"
            type="password"
            value=""
            className="form-control"
            placeholder=""
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  }
}

export default SignInForm;
