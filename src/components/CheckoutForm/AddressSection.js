import React, { Component } from 'react';

const INITIAL_STATE = {
  addressName: '',
  line1: ''
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class AddressSection extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
    const { addressName, line1 } = this.state;

    return (
      <div>
        <div className="form-group">
          <label htmlFor="addressName">Full Name:</label>
          <input
            id="addressName"
            className="form-control"
            value={addressName}
            onChange={event => this.setState(byPropKey('addressName', event.target.value))}
            type="text"
            placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            id="addressLine1"
            className="form-control"
            value={line1}
            onChange={event => this.setState(byPropKey('line1', event.target.value))}
            type="text"
            placeholder="Address Line 1"
          />
        </div>
      </div>
    );
  }
}

export default AddressSection;
