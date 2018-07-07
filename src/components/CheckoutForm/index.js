import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';

import AddressSection from './AddressSection';
import CardSection from './CardSection';
import './checkoutform.css';
class CheckoutForm extends Component {
  handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.

    this.props.stripe
      .createSource({
        type: 'ideal',
        amount: 1099,
        currency: 'eur',
        owner: {
          name: 'Jenny Rosen'
        }
      })
      .then(function(result) {
        console.log('result', result);
        // Handle result.error or result.source
        // Push order details to Firebase
        // Then Redirect to Thank you page
      });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <AddressSection />
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
