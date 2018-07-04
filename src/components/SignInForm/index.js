import React, { Component } from 'react';
import { auth } from '../../firebase';
import { AppConsumer } from '../../AppContext';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="userEmailAddress">Email address</label>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            id="userEmailAddress"
            placeholder="Email Address"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password</label>
          <input
            id="userPassword"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <button disabled={isInvalid} type="submit" className="btn btn-primary">
          Sign In
        </button>

        {error && <p className="alert alert-danger">{error.message}</p>}
      </form>
    );
  }
}

export default props => (
  <AppConsumer>{context => <SignInForm {...props} context={context} />}</AppConsumer>
);
