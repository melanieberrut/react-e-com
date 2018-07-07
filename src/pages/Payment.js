import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from '../components/MyStoreCheckout';

class PaymentPage extends Component {
  constructor() {
    super();
    this.state = { stripe: null };
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe('pk_test_HfHBJeMxmiH5mEuIXej2DlKd') });
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe('pk_test_12345') });
      });
    }
  }
  render() {
    console.log('this.state.stripe', this.state.stripe);
    return (
      <StripeProvider stripe={this.state.stripe}>
        <MyStoreCheckout />
      </StripeProvider>
    );
  }
}

export default PaymentPage;
