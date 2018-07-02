import React from 'react';
import SignInForm from '../components/SignInForm';
import { NavLink } from 'react-router-dom';
const SignIn = ({ history }) => (
  <React.Fragment>
    <div className="container">
      <div className="col-xs-12">
        <h1>Sign In</h1>
        <SignInForm history={history} />
        <p>
          Don't have an account? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </div>
  </React.Fragment>
);

export default SignIn;
