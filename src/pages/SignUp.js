import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { withRouter } from 'react-router-dom';
const SignUp = ({ history }) => (
  <React.Fragment>
    <div className="container">
      <div className="col-xs-12">
        <h1>Sign Up from</h1>
        <SignUpForm history={history} />
      </div>
    </div>
  </React.Fragment>
);

export default withRouter(SignUp);
