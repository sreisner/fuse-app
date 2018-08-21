import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class CheckoutForm extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zip,
      onChange,
    } = this.props;

    return (
      <React.Fragment>
        <TextField
          name="firstName"
          label="First Name"
          value={firstName}
          onChange={onChange}
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={lastName}
          onChange={onChange}
        />
        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={onChange}
        />
        <TextField
          name="street"
          label="Street"
          value={street}
          onChange={onChange}
        />
        <TextField name="city" label="City" value={city} onChange={onChange} />
        <TextField
          name="state"
          label="State"
          value={state}
          onChange={onChange}
        />
        <TextField
          type="number"
          name="zip"
          label="Zip"
          value={zip}
          onChange={onChange}
        />
      </React.Fragment>
    );
  }
}

CheckoutForm.propTypes = {};

export default CheckoutForm;
