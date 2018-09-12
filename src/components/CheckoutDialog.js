import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckoutForm from './CheckoutForm';
import CheckoutService from '../services/api/checkout/checkout';
import PropTypes from 'prop-types';
import { ShoppingCartConsumer } from './ShoppingCartContext';

class CheckoutDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  submitPayment = (event, userData, productData, amountToCharge) => {
    event.preventDefault();

    CheckoutService.makePayment(userData, productData, amountToCharge).then(
      response => window.location.assign(response.checkoutUrl)
    );
  };

  onCheckoutFormChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, email, street, city, state, zip } = this.state;

    return (
      <ShoppingCartConsumer>
        {({ cart, subTotal }) => {
          const userData = this.state;

          const productData = cart.map(item => ({
            numItemsInCart: item.numItemsInCart,
            _id: item.product._id,
          }));

          const amountToCharge = subTotal;

          return (
            <div>
              <Dialog open={this.props.open} onClose={this.props.onClose}>
                <DialogTitle>Checkout</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Enter your payment information:
                  </DialogContentText>
                  <CheckoutForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    street={street}
                    city={city}
                    state={state}
                    zip={zip}
                    onChange={this.onCheckoutFormChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.props.onClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={event =>
                      this.submitPayment(
                        event,
                        userData,
                        productData,
                        amountToCharge
                      )
                    }
                    color="primary"
                  >
                    Submit Payment
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
        }}
      </ShoppingCartConsumer>
    );
  }
}

CheckoutDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CheckoutDialog;
