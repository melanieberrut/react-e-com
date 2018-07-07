import React, { Component } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';

class CardSection extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Card details</label>

        <CardNumberElement style={{ base: { fontSize: '18px' } }} />
        <CardExpiryElement style={{ base: { fontSize: '18px' } }} />
        <CardCVCElement style={{ base: { fontSize: '18px' } }} />
        <PostalCodeElement style={{ base: { fontSize: '18px' } }} />
      </div>
    );
  }
}

export default CardSection;
